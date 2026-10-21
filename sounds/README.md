# JTD 3 — sound

136 files, 1.6 MB, all CC0. Sound effects only — no music. From the **JaxonTD-Sounds** pack; the Kenney
`ui/` sounds are genuine Kenney downloads, everything else was generated for
that pack. No attribution is required.

```
sounds/
  ui/            14   the interface: press, hover, open, close, toggles
  projectiles/   58   one per weapon, named after the game's own `ammo` key
  enemies/       37   blob pops (7 tiers x 3 variants), elites, bosses, leaks
  game/          27   placing, selling, waves, coins, victory, the cinematics
  manifest.js         the tuning sheet — see below
```

## Tuning without touching code

`manifest.js` is the whole sound design in one file. Every entry:

```js
"enemies/pop_t3_2": {
  "src": "sounds/enemies/pop_t3_2.mp3",
  "bus": "sfx",        // sfx | amb — which fader it answers to
  "vol": 0.45,         // its own level, before the faders
  "cooldown": 16,      // ms before this id may sound again
  "max": 6,            // how many copies may overlap
  "jitter": 0.09,      // random pitch spread (0.09 = +/-4.5%)
  "dur": 0.106         // measured, for reference
}
```

Change a number, reload, done. The game re-reads all of it.

**Swapping a sound:** drop a new file over the old one, same name. Nothing
else to change. Want a real recording instead of the synthesised ones? The
pack's `MISSING - download these yourself.md` lists where the better source
material lives.

**Adding a sound:** add the file, add an entry. Projectile ids are the bare
`ammo` key (`laser`, `blackhole`); everything else is `folder/name`.

## How it loads

The loader picks one of two paths at startup, because the two situations
are genuinely different:

| Opened as | Path | Why |
| --- | --- | --- |
| `file://` (double-clicked) | `<audio>` elements | `fetch` and `XHR` are both refused on `file://`, and a `MediaElementSource` built from one is CORS-tainted and feeds the graph silence. Elements played directly still work, so the faders are multiplied in by hand. |
| `http://` (served) | `decodeAudioData` → `BUS` | The good path: real mixing through the limiter, sample-accurate starts, pitch by `playbackRate`. |

Both honour the same manifest, so the game sounds the same either way.
Serving it is better — run `npx serve` or `python -m http.server` in the
game folder — but nothing requires it.

## If a sound is missing

Nothing breaks. `playSample()` returns `false`, the call site falls through
to the oscillator the game shipped with, and one line goes to the console
for that id — once, ever. Deleting the whole `sounds/` folder leaves a game
that still makes every noise it used to.

## Keeping deep waves sane

Wave 200 can ask for several hundred sounds a second. Three limits stop that
becoming a wall of noise, all of them in the manifest except the last:

- **cooldown** — the same id cannot retrigger inside its window
- **max** — the same id cannot overlap itself more than N times
- **pops per frame** — at most 3 blob pops *start* per rendered frame

Settings → Combat sound → **Reduced** halves the caps and lengthens the
cooldowns again, and `Graphics: Fast` does the same automatically.

Sound is never pitched by game speed. At 3× everything would go chipmunk,
which is the one thing that makes fast play unpleasant; only the small
random jitter above ever moves a pitch.

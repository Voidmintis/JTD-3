/* ====================================================================
 *  JAXON TOWER DEFENSE — SOUND MANIFEST
 *
 *  The tuning sheet for the whole game. Every value here can be changed
 *  without touching a line of game code; the engine re-reads all of it.
 *
 *    src       where the file lives, relative to index.html
 *    bus       sfx | amb | music  — which fader it answers to
 *    vol       0..1, this sound's own level before the faders
 *    cooldown  ms that must pass before this id may sound again
 *    max       how many copies may overlap at once
 *    jitter    random pitch spread, 0..1 (0.1 = +/-5%)
 *    dur       measured length in seconds, for reference
 *
 *  Loaded with a <script> tag rather than fetch() on purpose: a game
 *  opened straight off the disk (file://) cannot fetch anything, and the
 *  sound must still work there. See the loader in index.html.
 * ==================================================================== */
window.JTD_SOUND_MANIFEST = {
 "version": 1,
 "generated": "2026-10-21",
 "base": "sounds/",
 "sounds": {
  "enemies/boss_arrive": {
   "src": "sounds/enemies/boss_arrive.mp3",
   "bus": "sfx",
   "vol": 0.85,
   "cooldown": 1500,
   "max": 1,
   "jitter": 0,
   "dur": 2
  },
  "enemies/boss_debt": {
   "src": "sounds/enemies/boss_debt.mp3",
   "bus": "sfx",
   "vol": 0.5,
   "cooldown": 400,
   "max": 1,
   "jitter": 0.09,
   "dur": 0.36
  },
  "enemies/boss_die": {
   "src": "sounds/enemies/boss_die.mp3",
   "bus": "sfx",
   "vol": 0.85,
   "cooldown": 1200,
   "max": 1,
   "jitter": 0,
   "dur": 1.6
  },
  "enemies/boss_overclock": {
   "src": "sounds/enemies/boss_overclock.mp3",
   "bus": "sfx",
   "vol": 0.5,
   "cooldown": 600,
   "max": 1,
   "jitter": 0.09,
   "dur": 0.5
  },
  "enemies/boss_plate": {
   "src": "sounds/enemies/boss_plate.mp3",
   "bus": "sfx",
   "vol": 0.5,
   "cooldown": 260,
   "max": 2,
   "jitter": 0.09,
   "dur": 0.4
  },
  "enemies/boss_static": {
   "src": "sounds/enemies/boss_static.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 400,
   "max": 1,
   "jitter": 0.09,
   "dur": 0.4
  },
  "enemies/combo_fill": {
   "src": "sounds/enemies/combo_fill.mp3",
   "bus": "sfx",
   "vol": 0.3,
   "cooldown": 90,
   "max": 2,
   "jitter": 0.09,
   "dur": 0.27
  },
  "enemies/combo_max": {
   "src": "sounds/enemies/combo_max.mp3",
   "bus": "sfx",
   "vol": 0.6,
   "cooldown": 700,
   "max": 1,
   "jitter": 0,
   "dur": 0.4
  },
  "enemies/elite_pop": {
   "src": "sounds/enemies/elite_pop.mp3",
   "bus": "sfx",
   "vol": 0.5,
   "cooldown": 40,
   "max": 4,
   "jitter": 0.09,
   "dur": 0.2
  },
  "enemies/final_die": {
   "src": "sounds/enemies/final_die.mp3",
   "bus": "sfx",
   "vol": 0.9,
   "cooldown": 1500,
   "max": 1,
   "jitter": 0,
   "dur": 3
  },
  "enemies/heat_echo_die": {
   "src": "sounds/enemies/heat_echo_die.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 60,
   "max": 3,
   "jitter": 0.09,
   "dur": 0.5
  },
  "enemies/hit_soft": {
   "src": "sounds/enemies/hit_soft.mp3",
   "bus": "sfx",
   "vol": 0.26,
   "cooldown": 110,
   "max": 2,
   "jitter": 0.12,
   "dur": 0.03
  },
  "enemies/knight_arrive": {
   "src": "sounds/enemies/knight_arrive.mp3",
   "bus": "sfx",
   "vol": 0.75,
   "cooldown": 1200,
   "max": 1,
   "jitter": 0,
   "dur": 0.9
  },
  "enemies/leak": {
   "src": "sounds/enemies/leak.mp3",
   "bus": "sfx",
   "vol": 0.7,
   "cooldown": 220,
   "max": 2,
   "jitter": 0.03,
   "dur": 0.65
  },
  "enemies/pop_t1_1": {
   "src": "sounds/enemies/pop_t1_1.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.082
  },
  "enemies/pop_t1_2": {
   "src": "sounds/enemies/pop_t1_2.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.082
  },
  "enemies/pop_t1_3": {
   "src": "sounds/enemies/pop_t1_3.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.082
  },
  "enemies/pop_t2_1": {
   "src": "sounds/enemies/pop_t2_1.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.094
  },
  "enemies/pop_t2_2": {
   "src": "sounds/enemies/pop_t2_2.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.094
  },
  "enemies/pop_t2_3": {
   "src": "sounds/enemies/pop_t2_3.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.094
  },
  "enemies/pop_t3_1": {
   "src": "sounds/enemies/pop_t3_1.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.106
  },
  "enemies/pop_t3_2": {
   "src": "sounds/enemies/pop_t3_2.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.106
  },
  "enemies/pop_t3_3": {
   "src": "sounds/enemies/pop_t3_3.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.106
  },
  "enemies/pop_t4_1": {
   "src": "sounds/enemies/pop_t4_1.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.118
  },
  "enemies/pop_t4_2": {
   "src": "sounds/enemies/pop_t4_2.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.118
  },
  "enemies/pop_t4_3": {
   "src": "sounds/enemies/pop_t4_3.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.118
  },
  "enemies/pop_t5_1": {
   "src": "sounds/enemies/pop_t5_1.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.13
  },
  "enemies/pop_t5_2": {
   "src": "sounds/enemies/pop_t5_2.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.13
  },
  "enemies/pop_t5_3": {
   "src": "sounds/enemies/pop_t5_3.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.13
  },
  "enemies/pop_t6_1": {
   "src": "sounds/enemies/pop_t6_1.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.142
  },
  "enemies/pop_t6_2": {
   "src": "sounds/enemies/pop_t6_2.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.142
  },
  "enemies/pop_t6_3": {
   "src": "sounds/enemies/pop_t6_3.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.142
  },
  "enemies/pop_t7_1": {
   "src": "sounds/enemies/pop_t7_1.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.154
  },
  "enemies/pop_t7_2": {
   "src": "sounds/enemies/pop_t7_2.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.154
  },
  "enemies/pop_t7_3": {
   "src": "sounds/enemies/pop_t7_3.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 16,
   "max": 6,
   "jitter": 0.09,
   "dur": 0.154
  },
  "enemies/shell_crack": {
   "src": "sounds/enemies/shell_crack.mp3",
   "bus": "sfx",
   "vol": 0.5,
   "cooldown": 90,
   "max": 3,
   "jitter": 0.09,
   "dur": 0.2
  },
  "enemies/shield_absorb": {
   "src": "sounds/enemies/shield_absorb.mp3",
   "bus": "sfx",
   "vol": 0.4,
   "cooldown": 110,
   "max": 3,
   "jitter": 0.09,
   "dur": 0.35
  },
  "game/admin_level": {
   "src": "sounds/game/admin_level.mp3",
   "bus": "sfx",
   "vol": 0.65,
   "cooldown": 600,
   "max": 1,
   "jitter": 0,
   "dur": 0.48
  },
  "game/ascend": {
   "src": "sounds/game/ascend.mp3",
   "bus": "sfx",
   "vol": 0.8,
   "cooldown": 700,
   "max": 1,
   "jitter": 0,
   "dur": 2.4
  },
  "game/coin": {
   "src": "sounds/game/coin.mp3",
   "bus": "sfx",
   "vol": 0.4,
   "cooldown": 35,
   "max": 5,
   "jitter": 0.05,
   "dur": 0.23
  },
  "game/coins_run": {
   "src": "sounds/game/coins_run.mp3",
   "bus": "sfx",
   "vol": 0.6,
   "cooldown": 200,
   "max": 1,
   "jitter": 0,
   "dur": 0.36
  },
  "game/defeat": {
   "src": "sounds/game/defeat.mp3",
   "bus": "sfx",
   "vol": 0.8,
   "cooldown": 1200,
   "max": 1,
   "jitter": 0,
   "dur": 1.06
  },
  "game/double_ascend": {
   "src": "sounds/game/double_ascend.mp3",
   "bus": "sfx",
   "vol": 0.85,
   "cooldown": 700,
   "max": 1,
   "jitter": 0,
   "dur": 3.3
  },
  "game/freeplay": {
   "src": "sounds/game/freeplay.mp3",
   "bus": "sfx",
   "vol": 0.7,
   "cooldown": 900,
   "max": 1,
   "jitter": 0,
   "dur": 0.39
  },
  "game/hatch": {
   "src": "sounds/game/hatch.mp3",
   "bus": "sfx",
   "vol": 0.6,
   "cooldown": 700,
   "max": 1,
   "jitter": 0,
   "dur": 0.8
  },
  "game/heli": {
   "src": "sounds/game/heli.mp3",
   "bus": "amb",
   "vol": 0.55,
   "cooldown": 1500,
   "max": 1,
   "jitter": 0,
   "dur": 2.5
  },
  "game/new_best": {
   "src": "sounds/game/new_best.mp3",
   "bus": "sfx",
   "vol": 0.75,
   "cooldown": 900,
   "max": 1,
   "jitter": 0,
   "dur": 0.51
  },
  "game/orb_hover": {
   "src": "sounds/game/orb_hover.mp3",
   "bus": "sfx",
   "vol": 0.3,
   "cooldown": 200,
   "max": 1,
   "jitter": 0.05,
   "dur": 0.3
  },
  "game/orb_merge": {
   "src": "sounds/game/orb_merge.mp3",
   "bus": "sfx",
   "vol": 0.6,
   "cooldown": 400,
   "max": 1,
   "jitter": 0,
   "dur": 0.5
  },
  "game/orb_split": {
   "src": "sounds/game/orb_split.mp3",
   "bus": "sfx",
   "vol": 0.7,
   "cooldown": 400,
   "max": 1,
   "jitter": 0,
   "dur": 0.65
  },
  "game/place": {
   "src": "sounds/game/place.mp3",
   "bus": "sfx",
   "vol": 0.6,
   "cooldown": 50,
   "max": 3,
   "jitter": 0.05,
   "dur": 0.12
  },
  "game/purchase": {
   "src": "sounds/game/purchase.mp3",
   "bus": "sfx",
   "vol": 0.55,
   "cooldown": 60,
   "max": 3,
   "jitter": 0.05,
   "dur": 0.49
  },
  "game/rocket": {
   "src": "sounds/game/rocket.mp3",
   "bus": "amb",
   "vol": 0.6,
   "cooldown": 1500,
   "max": 1,
   "jitter": 0,
   "dur": 3
  },
  "game/sell": {
   "src": "sounds/game/sell.mp3",
   "bus": "sfx",
   "vol": 0.55,
   "cooldown": 90,
   "max": 2,
   "jitter": 0.05,
   "dur": 0.3
  },
  "game/shard": {
   "src": "sounds/game/shard.mp3",
   "bus": "sfx",
   "vol": 0.8,
   "cooldown": 900,
   "max": 1,
   "jitter": 0,
   "dur": 1.35
  },
  "game/skill_buy": {
   "src": "sounds/game/skill_buy.mp3",
   "bus": "sfx",
   "vol": 0.65,
   "cooldown": 120,
   "max": 2,
   "jitter": 0.05,
   "dur": 0.4
  },
  "game/titan_level": {
   "src": "sounds/game/titan_level.mp3",
   "bus": "sfx",
   "vol": 0.7,
   "cooldown": 600,
   "max": 1,
   "jitter": 0,
   "dur": 1
  },
  "game/unlock": {
   "src": "sounds/game/unlock.mp3",
   "bus": "sfx",
   "vol": 0.7,
   "cooldown": 500,
   "max": 1,
   "jitter": 0,
   "dur": 0.59
  },
  "game/upgrade": {
   "src": "sounds/game/upgrade.mp3",
   "bus": "sfx",
   "vol": 0.6,
   "cooldown": 90,
   "max": 2,
   "jitter": 0.05,
   "dur": 0.33
  },
  "game/victory": {
   "src": "sounds/game/victory.mp3",
   "bus": "sfx",
   "vol": 0.8,
   "cooldown": 1200,
   "max": 1,
   "jitter": 0,
   "dur": 1.7
  },
  "game/warp": {
   "src": "sounds/game/warp.mp3",
   "bus": "amb",
   "vol": 0.55,
   "cooldown": 900,
   "max": 1,
   "jitter": 0,
   "dur": 1.2
  },
  "game/wave_clear": {
   "src": "sounds/game/wave_clear.mp3",
   "bus": "sfx",
   "vol": 0.6,
   "cooldown": 300,
   "max": 1,
   "jitter": 0,
   "dur": 0.48
  },
  "game/wave_start": {
   "src": "sounds/game/wave_start.mp3",
   "bus": "sfx",
   "vol": 0.6,
   "cooldown": 300,
   "max": 1,
   "jitter": 0,
   "dur": 0.45
  },
  "game/wind": {
   "src": "sounds/game/wind.mp3",
   "bus": "amb",
   "vol": 0.4,
   "cooldown": 900,
   "max": 1,
   "jitter": 0,
   "dur": 2.5
  },
  "music/music_battle_loop": {
   "src": "sounds/music/music_battle_loop.mp3",
   "bus": "music",
   "vol": 0.8,
   "cooldown": 0,
   "max": 1,
   "jitter": 0,
   "dur": 13.714
  },
  "music/music_boss_loop": {
   "src": "sounds/music/music_boss_loop.mp3",
   "bus": "music",
   "vol": 0.8,
   "cooldown": 0,
   "max": 1,
   "jitter": 0,
   "dur": 11.429
  },
  "music/music_menu_loop": {
   "src": "sounds/music/music_menu_loop.mp3",
   "bus": "music",
   "vol": 0.8,
   "cooldown": 0,
   "max": 1,
   "jitter": 0,
   "dur": 20
  },
  "acid": {
   "src": "sounds/projectiles/acid.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.44
  },
  "admin": {
   "src": "sounds/projectiles/admin.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.3
  },
  "admincar": {
   "src": "sounds/projectiles/admincar.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.23
  },
  "aid": {
   "src": "sounds/projectiles/aid.mp3",
   "bus": "sfx",
   "vol": 0.26,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.45
  },
  "astro_claw": {
   "src": "sounds/projectiles/astro_claw.mp3",
   "bus": "sfx",
   "vol": 0.3,
   "cooldown": 140,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.5
  },
  "bank": {
   "src": "sounds/projectiles/bank.mp3",
   "bus": "sfx",
   "vol": 0.3,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.25
  },
  "beam": {
   "src": "sounds/projectiles/beam.mp3",
   "bus": "sfx",
   "vol": 0.26,
   "cooldown": 180,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.6
  },
  "blackhole": {
   "src": "sounds/projectiles/blackhole.mp3",
   "bus": "sfx",
   "vol": 0.4,
   "cooldown": 300,
   "max": 2,
   "jitter": 0.1,
   "dur": 0.8
  },
  "bubble": {
   "src": "sounds/projectiles/bubble.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.14
  },
  "buff": {
   "src": "sounds/projectiles/buff.mp3",
   "bus": "sfx",
   "vol": 0.26,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.7
  },
  "build": {
   "src": "sounds/projectiles/build.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.43
  },
  "caddy": {
   "src": "sounds/projectiles/caddy.mp3",
   "bus": "sfx",
   "vol": 0.3,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.56
  },
  "car": {
   "src": "sounds/projectiles/car.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.15
  },
  "cell": {
   "src": "sounds/projectiles/cell.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.23
  },
  "cut": {
   "src": "sounds/projectiles/cut.mp3",
   "bus": "sfx",
   "vol": 0.6,
   "cooldown": 600,
   "max": 1,
   "jitter": 0,
   "dur": 0.06
  },
  "diamondcar": {
   "src": "sounds/projectiles/diamondcar.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.22
  },
  "disc": {
   "src": "sounds/projectiles/disc.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.6
  },
  "drill": {
   "src": "sounds/projectiles/drill.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.4
  },
  "ember": {
   "src": "sounds/projectiles/ember.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.25
  },
  "fireball": {
   "src": "sounds/projectiles/fireball.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.6
  },
  "flame": {
   "src": "sounds/projectiles/flame.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.4
  },
  "goldcar": {
   "src": "sounds/projectiles/goldcar.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.3
  },
  "gravity": {
   "src": "sounds/projectiles/gravity.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 400,
   "max": 2,
   "jitter": 0.1,
   "dur": 0.8
  },
  "guillotine": {
   "src": "sounds/projectiles/guillotine.mp3",
   "bus": "sfx",
   "vol": 0.7,
   "cooldown": 900,
   "max": 1,
   "jitter": 0,
   "dur": 0.47
  },
  "gust": {
   "src": "sounds/projectiles/gust.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.45
  },
  "heal": {
   "src": "sounds/projectiles/heal.mp3",
   "bus": "sfx",
   "vol": 0.26,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.59
  },
  "hyper": {
   "src": "sounds/projectiles/hyper.mp3",
   "bus": "sfx",
   "vol": 0.28,
   "cooldown": 150,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.25
  },
  "hypervoid": {
   "src": "sounds/projectiles/hypervoid.mp3",
   "bus": "sfx",
   "vol": 0.3,
   "cooldown": 170,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.35
  },
  "ice": {
   "src": "sounds/projectiles/ice.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.21
  },
  "laser": {
   "src": "sounds/projectiles/laser.mp3",
   "bus": "sfx",
   "vol": 0.28,
   "cooldown": 110,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.16
  },
  "ledger": {
   "src": "sounds/projectiles/ledger.mp3",
   "bus": "sfx",
   "vol": 0.3,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.442
  },
  "mark": {
   "src": "sounds/projectiles/mark.mp3",
   "bus": "sfx",
   "vol": 0.26,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.3
  },
  "mirror": {
   "src": "sounds/projectiles/mirror.mp3",
   "bus": "sfx",
   "vol": 0.22,
   "cooldown": 140,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.3
  },
  "nova": {
   "src": "sounds/projectiles/nova.mp3",
   "bus": "sfx",
   "vol": 0.4,
   "cooldown": 260,
   "max": 2,
   "jitter": 0.1,
   "dur": 1.35
  },
  "orbit": {
   "src": "sounds/projectiles/orbit.mp3",
   "bus": "sfx",
   "vol": 0.26,
   "cooldown": 260,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.05
  },
  "overcharge": {
   "src": "sounds/projectiles/overcharge.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.35
  },
  "pebble": {
   "src": "sounds/projectiles/pebble.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.11
  },
  "plasma": {
   "src": "sounds/projectiles/plasma.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.85
  },
  "prism": {
   "src": "sounds/projectiles/prism.mp3",
   "bus": "sfx",
   "vol": 0.28,
   "cooldown": 160,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.42
  },
  "rail": {
   "src": "sounds/projectiles/rail.mp3",
   "bus": "sfx",
   "vol": 0.3,
   "cooldown": 150,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.6
  },
  "rainbow": {
   "src": "sounds/projectiles/rainbow.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.305
  },
  "recycle": {
   "src": "sounds/projectiles/recycle.mp3",
   "bus": "sfx",
   "vol": 0.3,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.3
  },
  "saw": {
   "src": "sounds/projectiles/saw.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.5
  },
  "scream": {
   "src": "sounds/projectiles/scream.mp3",
   "bus": "sfx",
   "vol": 0.3,
   "cooldown": 200,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.45
  },
  "shock": {
   "src": "sounds/projectiles/shock.mp3",
   "bus": "sfx",
   "vol": 0.36,
   "cooldown": 220,
   "max": 2,
   "jitter": 0.1,
   "dur": 0.9
  },
  "shred": {
   "src": "sounds/projectiles/shred.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.5
  },
  "shuriken": {
   "src": "sounds/projectiles/shuriken.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.06
  },
  "slam": {
   "src": "sounds/projectiles/slam.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 1.4
  },
  "slaydart": {
   "src": "sounds/projectiles/slaydart.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.07
  },
  "snack": {
   "src": "sounds/projectiles/snack.mp3",
   "bus": "sfx",
   "vol": 0.3,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.19
  },
  "storm": {
   "src": "sounds/projectiles/storm.mp3",
   "bus": "sfx",
   "vol": 0.32,
   "cooldown": 220,
   "max": 4,
   "jitter": 0.1,
   "dur": 1.22
  },
  "stun": {
   "src": "sounds/projectiles/stun.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.4
  },
  "tax": {
   "src": "sounds/projectiles/tax.mp3",
   "bus": "sfx",
   "vol": 0.3,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.15
  },
  "tipjar": {
   "src": "sounds/projectiles/tipjar.mp3",
   "bus": "sfx",
   "vol": 0.3,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.27
  },
  "vortex": {
   "src": "sounds/projectiles/vortex.mp3",
   "bus": "sfx",
   "vol": 0.38,
   "cooldown": 300,
   "max": 2,
   "jitter": 0.1,
   "dur": 0.7
  },
  "wipe": {
   "src": "sounds/projectiles/wipe.mp3",
   "bus": "sfx",
   "vol": 0.6,
   "cooldown": 600,
   "max": 1,
   "jitter": 0,
   "dur": 1.4
  },
  "wreck": {
   "src": "sounds/projectiles/wreck.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 1.35
  },
  "yoyo": {
   "src": "sounds/projectiles/yoyo.mp3",
   "bus": "sfx",
   "vol": 0.34,
   "cooldown": 45,
   "max": 4,
   "jitter": 0.1,
   "dur": 0.42
  },
  "ui/back": {
   "src": "sounds/ui/back.mp3",
   "bus": "sfx",
   "vol": 0.55,
   "cooldown": 40,
   "max": 3,
   "jitter": 0.04,
   "dur": 0.091
  },
  "ui/close": {
   "src": "sounds/ui/close.mp3",
   "bus": "sfx",
   "vol": 0.55,
   "cooldown": 40,
   "max": 3,
   "jitter": 0.04,
   "dur": 0.38
  },
  "ui/confirm": {
   "src": "sounds/ui/confirm.mp3",
   "bus": "sfx",
   "vol": 0.55,
   "cooldown": 40,
   "max": 3,
   "jitter": 0.04,
   "dur": 0.295
  },
  "ui/deny": {
   "src": "sounds/ui/deny.mp3",
   "bus": "sfx",
   "vol": 0.5,
   "cooldown": 140,
   "max": 1,
   "jitter": 0.04,
   "dur": 0.521
  },
  "ui/hover": {
   "src": "sounds/ui/hover.mp3",
   "bus": "sfx",
   "vol": 0.22,
   "cooldown": 70,
   "max": 1,
   "jitter": 0.04,
   "dur": 0.062
  },
  "ui/open": {
   "src": "sounds/ui/open.mp3",
   "bus": "sfx",
   "vol": 0.55,
   "cooldown": 40,
   "max": 3,
   "jitter": 0.04,
   "dur": 0.387
  },
  "ui/piece_land": {
   "src": "sounds/ui/piece_land.mp3",
   "bus": "sfx",
   "vol": 0.45,
   "cooldown": 0,
   "max": 6,
   "jitter": 0.04,
   "dur": 0.202
  },
  "ui/press": {
   "src": "sounds/ui/press.mp3",
   "bus": "sfx",
   "vol": 0.5,
   "cooldown": 40,
   "max": 2,
   "jitter": 0.04,
   "dur": 0.012
  },
  "ui/release": {
   "src": "sounds/ui/release.mp3",
   "bus": "sfx",
   "vol": 0.55,
   "cooldown": 40,
   "max": 3,
   "jitter": 0.04,
   "dur": 0.019
  },
  "ui/select": {
   "src": "sounds/ui/select.mp3",
   "bus": "sfx",
   "vol": 0.55,
   "cooldown": 40,
   "max": 3,
   "jitter": 0.04,
   "dur": 0.062
  },
  "ui/tab": {
   "src": "sounds/ui/tab.mp3",
   "bus": "sfx",
   "vol": 0.42,
   "cooldown": 40,
   "max": 2,
   "jitter": 0.04,
   "dur": 0.62
  },
  "ui/tap": {
   "src": "sounds/ui/tap.mp3",
   "bus": "sfx",
   "vol": 0.42,
   "cooldown": 40,
   "max": 2,
   "jitter": 0.04,
   "dur": 0.023
  },
  "ui/toggle_off": {
   "src": "sounds/ui/toggle_off.mp3",
   "bus": "sfx",
   "vol": 0.55,
   "cooldown": 40,
   "max": 3,
   "jitter": 0.04,
   "dur": 0.141
  },
  "ui/toggle_on": {
   "src": "sounds/ui/toggle_on.mp3",
   "bus": "sfx",
   "vol": 0.55,
   "cooldown": 40,
   "max": 3,
   "jitter": 0.04,
   "dur": 0.158
  }
 }
};

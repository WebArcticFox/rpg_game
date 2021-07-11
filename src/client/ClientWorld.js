class ClientWorld {
  constructor(game, engine, levelCfg) {
    Object.assign(this, {
      game,
      engine,
      levelCfg,
      height: levelCfg.map.length,
      width: levelCfg.map[0].length,
    });
  }

  init() {
    for (let i = 0; i < this.height; i += 1) {
      for (let j = 0; j < this.width; j += 1) {
        this.engine.renderSpriteFrame(
          ['terrain', 'grass'],
          0,
          48 * i,
          48 * j,
          48,
          48,
        );
      }
    }
  }
}

export default ClientWorld;

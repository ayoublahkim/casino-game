import {Categories} from "./types.enum";

export class GameEntity {

  id: string | undefined;
  name: string | undefined;
  image: string | undefined;
  categories: Array<Categories> | undefined;
  jackpot: number | undefined;

  constructor(gameEntity: Partial<GameEntity>) {
    this.buildEntity(gameEntity);
  }

  buildEntity(conf: Partial<GameEntity>) {
    Object.keys(conf).forEach(key => {
      // @ts-ignore
      this[key] = conf[key];
    })
  }

}

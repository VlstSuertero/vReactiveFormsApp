import { CarEntity } from './car-entity';

export interface OwnerEntity {
  ownerId: number,
  aLastNae: string,
  aFirstName:string,
  aMiddleName: string,
  aCars: CarEntity[]
}

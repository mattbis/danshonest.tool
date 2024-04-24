import { BaseEntity } from '../BaseEntity'
import { Entity, Property } from "@mikro-orm/sqlite"

@Entity()
export class Transform extends BaseEntity {
    @Property()
    transformId: string
}

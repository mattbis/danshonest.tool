import { BaseEntity } from '../BaseEntity'
import { Entity, Property } from "@mikro-orm/sqlite"

@Entity()
export class Url extends BaseEntity {
    @Property()
    lastAccess: Date
}

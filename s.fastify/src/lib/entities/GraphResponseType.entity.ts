import { Entity, Property } from "@mikro-orm/sqlite"
import { BaseEntity } from "../BaseEntity"
@Entity()
export class GraphResponseType extends BaseEntity {
    @Property()
    transformId: string

    @Property()
    schemaId: string
}
namespace RelMapper {
    export interface IRelDef {
        direction: 'from'|'to',
        operator: string,
        value: object
    }
    export type INode = {
        node_type: string,
        description: string    
    }
    export type IOperator = {
        operator: string
    }
    export type IEdge = {
        edge_type: string,
        description: string
    }
    export type TNodeMap = {
        [key:string]: INode
    }
    export type TEdgeMap = {
        [key:string]: IEdge
    }
    export class RelMapper {
        static EDGES = {
            'AND': {
                edge_type:'and', 
                description: 'Must occur with term'
            },
            'NOT': {
                edge_type:'not', 
                description: 'Must not occur with selection'
            }
        }
        static NODES: TNodeMap = {
            'ip':{
                node_type: 'ip',
                description: 'IP Address'
            },
            'dns':{
                node_type: 'dns',
                description: "DNS Resolution"
            }
        }
        static OPERATORS= {
            'from': {
                operator: 'from'
            },
            'to': {
                operator: 'to'
            }
        }
        static VALUES= {
            value: null
        }
        private relations: IRelDef[] = []
        load() {}
        save() {}
    }
}
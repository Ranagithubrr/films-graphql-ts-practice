import { Film } from "../../__generated__/graphql"


const Films = ({Films}:{Films:Film | null}) => {    
    return (
        <>
            <div>{Films?.id}</div>
            <div>{Films?.title}</div>
        </>
    )
}

export default Films;
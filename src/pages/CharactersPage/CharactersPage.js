import {Characters, FormFilterByStatus, FormSearchByName} from "../../Components";

const CharactersPage = () => {
    return (
        <div>
            <div style={{display:'flex', marginBottom:'20px'}}>
                <FormFilterByStatus/> <FormSearchByName/>
            </div>
<Characters/>
        </div>
    );
};

export {CharactersPage};
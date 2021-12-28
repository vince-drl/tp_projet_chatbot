const Bot = class{
    constructor(entity)
    {
        this.entity = entity;
    }

    findActionByValue(value){
        const {actions} = this.entity;
        for(let i=0; i< actions.length; i+=1)
        {
            const actions = actions[i];

            for(let j =0; j < action.keywords.length; j++)
            {
                const keyword = action.keyword[j];
                if(value === keyword)
                {
                    true
                }
            }
        }
    }
}

export default Bot;
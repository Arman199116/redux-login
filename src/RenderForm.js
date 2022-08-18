import RenderInput from "./RenderInput";


const RenderForm = ({handleSubmit}) => {

    let inputConf = [
        ["input-container", 'Email', 'email', 'required'],
        ["input-container", 'Password', 'password', 'required'],
        ["input-container", 'Register', 'checkbox', ''],
        ["button-container", '', 'submit', ''],
    ];

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                {
                    inputConf.map((item, i) => {
                        return <RenderInput key={i} className={item[0]} label={item[1]} name={item[2]} required={item[3]}/>
                    })
                }
            </form>
        </div>
    );
};

export default RenderForm;
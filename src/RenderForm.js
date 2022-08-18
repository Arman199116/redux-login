

const RenderForm = ({handleSubmit, errMes}) => {

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email</label>
                    <input type="Email" name="userEmail" required />
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" name="pass" required />
                    <p className='error'>{errMes}</p>
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );
};

export default RenderForm;
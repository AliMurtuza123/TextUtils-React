export default function Alert(props){
    return (
        <>
        <div style={{minHeight: '58px'}}>
        {props.alert && <div className={`alert alert-${props.alert.code}`} role="alert">
            {props.alert.msg}
            </div>}
        </div>
            
        </>
    );
}
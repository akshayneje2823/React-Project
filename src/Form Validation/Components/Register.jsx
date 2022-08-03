import React,{useRef,useState,useEffect} from 'react';
import {faCheck,faTimes,faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function Register() {
    const userRef = useRef();
    const errRef = useRef()

    
    const [user,setUser] = useState('');                // For User Input
    const [validName,setValidName] = useState(false);   // For Validation
    const [userFocus,setUserFocus] = useState(false);   // Focus

    // Password
    const [pwd,setPwd] = useState(''); 
    const [validPwd,setValidPwd] = useState(false) ;
    const [pwdFocus,setPwdFocus] = useState(false) ;

    // Matching Password
    const [matchPwd,setMatchPwd] = useState(''); 
    const [validmatch,setValidMatch] = useState(false) ;
    const [matchFocus,setMatchFocus] = useState(false) ;

    const [errMsg,setErrMsg] = useState('');            //For Error MSG
    const [success,setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(()=>{
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result)
    },[user])
    useEffect(()=>{
        const result = USER_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidName(result)
    },[pwd,matchPwd])
    
    useEffect(()=>{
        setErrMsg('')
    },[user,pwd,matchPwd])
  return (
    <section>
        <p 
        ref={errRef} 
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
         >
            {errMsg}
        </p>
        <h1>Register</h1>
        <form >
            <label htmlFor="username">
                Username:
            </label>
        </form>
    </section>
  )
}

export default Register
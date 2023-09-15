import styles from './Feedback.module.css';
import paperclip from '../../img/Paperclip.svg';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
export default function Feedback() {
    const [data, setData] = useState({});
    const [uploadInfo, setUploadInfo] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [emailError, setEmailError] = useState('Поле не может быть пустым');
    const [phoneError, setPhoneError] = useState('Поле не может быть пустым');
    const [formValid, setFormValid] = useState(false);


    useEffect(() => {
      if(emailError || phoneError){
         setFormValid(false);
      }
      else{
          setFormValid(true);
      }
    }, [emailError, phoneError])

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        axios.post('https://backend.cyberia.studio/api/v1/feedbacks', formData)
            .then((response) => {
                if((response.status === 200 && response.data.errors) || (response.status !== 200)){
                    window.alert('Данные не валидны, введите снова');
                }
                else {
                    setData(response.data);
                    console.log('accept')
                    console.log(data);
                }
            })
            ;
    }

    const onUploadClick = (e) => {
        e.preventDefault();
        document.getElementById('upload').dispatchEvent(new MouseEvent('click'));
    }

    const uploadHandler = (e) => {
       setUploadInfo(e.currentTarget.files[0].name);
    }

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'email':
                setEmailDirty(true);
                break;
            case 'phone':
                setPhoneDirty(true);
                break;
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const regexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!regexp.test(String(e.target.value).toLowerCase())){
          setEmailError('Некорректный email')
        }
        else{
            setEmailError('');
        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value);
        const regexp = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
        if(!regexp.test(e.target.value)){
            setPhoneError('Некорректный номер телефона')
        }
        else{
            setPhoneError('');
        }
    }

    return(
        <article className={styles.feedback}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h2 className={styles.title}>Расскажите
                            о вашем проекте</h2>
                        <p className={styles.description}>Поделитесь с нами информацией, чем мы можем быть полезны: реализовать идею или выделить разработчиков для ИТ-команды. Чем больше вы нам расскажете — тем продуктивнее будет дальнейшее обсуждение.</p>
                    </div>
                    <form onSubmit={handleSubmit} className={styles.form}>

                        {(emailDirty && emailError) && <div className="emailError" style={{color: '#943232'}}>{emailError}</div>}
                            <input value={email} onChange={(e) => emailHandler(e)} type="email" onBlur={(e) => blurHandler(e)} className={`${styles.emailInput} ${styles.input}`} name={'email'} placeholder="E-mail" required={true}/>

                        {(phoneDirty && phoneError) && <div className="phoneError" style={{color: '#943232'}}>{phoneError}</div>}
                            <input value={phone} onChange={(e) => phoneHandler(e)} type="tel" onBlur={(e) => blurHandler(e)} className={`${styles.phoneInput} ${styles.input}`} name={'phone'} placeholder="Телефон" required={true}/>

                        <div className={styles.customTextarea}>
                            <textarea className={`${styles.messageTextarea} ${styles.input}`} name={'message'} placeholder="Сообщение" required={true}></textarea>
                            <div className={styles.wr}>
                        <div className={styles.upload}>
                            <input type="file" className={styles.uploadInput} id={'upload'} name={'attachment'} onChange={uploadHandler}/>
                                <div className={styles.uploadButton} onClick={onUploadClick}><img src={paperclip} alt=""/></div>
                        </div>
                            </div>
                        </div>
                        <div className={styles.uploadInfo}>{uploadInfo}</div>
                        <div className={styles.buttonGroup}>
                            <button type="submit" className={styles.sendButton} disabled={!formValid}>Отправить</button>
                            <p className={styles.info}>Нажимая “Отправить”, Вы даете согласие на обработку персональных данных</p>
                        </div>
                    </form>
                </div>
            </div>
        </article>
    );
}
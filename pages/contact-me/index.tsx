import style from '../../styles/ContactMe.module.css'

export default function Index() {
    return (
        <div className={style.content}>
            <p>
                <img className={style['image-mail']} src="/google-gmail.svg" />
                <a href="mailto: sumeyyebeyzayildiz@gmail.com">sumeyyebeyzayildiz@gmail.com</a>
            </p>
        </div>
    )
}

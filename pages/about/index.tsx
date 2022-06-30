import style from '../../styles/About.module.css';

const Index = () => {
    const technologies = [
        'angular',
        'react',
        'next-js',
        'javascript',
        'typescript',
        'nodejs',
        'npm',
        'yarn',
        'sass',
        'git',
        'highcharts',
        'material-ui',
        'primereact',
        'postgresql'
    ]
    return (
        <div className={style.content}>
            <h1>About</h1>
            <p> Hi! I am Sumeyye Beyza Yildiz. I usually interest Javascript Technologies. I live in Istanbul, Turkiye. I graduated as Software Engineer at Karadeniz Technical University in 2021. I am working as a Front-end Developer since 2018.</p>
            <p> I am on my own way, starting from the concept of lifelong learning. </p>
            <div className={style.likeboard}>
                {
                    technologies.map(t => {

                        return (
                            <div className={style.logo}>
                                <img src={'/' + t + '.svg'} title={t} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Index;

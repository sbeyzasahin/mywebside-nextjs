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
            <p> Hi! I am Sümeyye Beyza Yıldız. I am Front-end Developer. I usually interest Javascript Technologies. I was born on 1994. I live in Istanbul, Turkey. I graduated as Software Engineer at Karadeniz Technical University in 2021. I worked as a Front-end Developer from 2018 to 2022.</p>
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

import React from 'react'

const info = () => {
return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2 + Years</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">22 + Projects</span>
        </div>

        <div className="about__box">
            <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Support</h3>
            <div className="about__subtitle">Online 24/7</div>
        </div>
    </div>
)
}

export default info
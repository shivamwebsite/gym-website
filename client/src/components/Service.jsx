import React from 'react'
import "./service.css"
import { useForm } from "react-hook-form";

function Service() {
  return (
    <>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        <section class="backimg">
        <div class="contain8">
            <div class="contain1">
                <h1>CARDIO</h1>
                <h2>All of these aforementioned cardio machines are designed to improve cardiovascular health,
                    meaning
                    it increases your heart and respiratory rate to strengthen your heart muscle and build
                    endurance.
                    But some also build strength, Summerville says. So, think about what you want out of your
                    workout.
                </h2><br/><br/>
                <div>
                    <button class="servicebtn">VIRTUAL TOUR</button>
                </div>
            </div>
            <div class="contain2">
                <img class="img" align="center" src="Group-20.png" alt="error" />
            </div>
        </div>
    </section>
    <section class="backimg">
        <div class="contain8">
            <div class="contain3">
                <img class="img" align="center" src="Group-21.png" alt="error" />
            </div>
            <div class="contain4">
                <h1>FREE WEIGHTS</h1>
                <h2>For the average person, free weights offer many of the same benefits as machines, plus some.
                    While
                    you can typically lift more weight in the same exercise on a machine due to their fixed nature,
                    free
                    weights give you more bang for your buck in terms of muscles worked.
                </h2><br/><br/>
                <div>
                    <button class="servicebtn">VIRTUAL TOUR</button>
                </div>
            </div>
        </div>
    </section>
    <section class="backimg">
        <div class="contain8">
            <div class="contain1">
                <h1>STRENGHT EQUIPMENT</h1>
                <h2>Resistance machines have a predetermined range of motion, meaning you can only lift and lower
                    the
                    weight in the correct way. This helps you to learn the exercise, build up strength and learn to
                    engage the right muscles before progressing onto free weights.
                </h2><br/><br/>
                <div>
                    <button class="servicebtn">VIRTUAL TOUR</button>
                </div>
            </div>
            <div class="contain2">
                <img class="img" align="center"  src="Group-22.png" alt="error" />
            </div>
        </div>
    </section>
    </>
  )
}

export default Service
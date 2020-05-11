import React from "react"

import style from "./jour-programme.module.css";

// Grid related constant
export const DEFAULT_COLUMNS_PER_ROW = {
    DESKTOP: 6
};

export default function JourProgramme(props) {
    return (
        <>
            <h2>{props.programme.jourTitle}</h2>
            <div className={style.schedule} style={{ gridTemplateColumns: `repeat(${DEFAULT_COLUMNS_PER_ROW.DESKTOP}, 157px)` }}>

                {/* Opening */}
                {props.programme.ouvertureHeure && 
                    <div className={style.opening}>
                        <div className={style.time}>{props.programme.ouvertureHeure}</div>
                        <div className={style.openingEventTitle}>{props.programme.ouvertureTitle}</div>
                    </div>
                }

                {/* Timeslot grid */}
                {props.programme.horaire && 
                    props.programme.horaire.map((timeSlotSchedule, index) => {
                        {/* If timeslot doesn't have events type, return an empty time slot */}
                        if (!timeSlotSchedule.type) {
                            return <div className={style.emptyTypeSlot}></div>;
                        }

                        const firstRow = index <= (DEFAULT_COLUMNS_PER_ROW.DESKTOP - 1);
                        return timeSlotSchedule.heure && (<div key={timeSlotSchedule.heure} className={style.timeSlot}>
                            {/* Time, show only for first row */}
                            {firstRow && <div className={style.time}>{timeSlotSchedule.heure}</div>}

                            {/* Event title with number */}
                            {firstRow && 
                                <div className={style.eventTitleBlockWrapper}>
                                    {timeSlotSchedule.title && 
                                        <div className={style.eventTitleBlock}>
                                            <div className={style.number}>{timeSlotSchedule.numero < 10 ? '0' + timeSlotSchedule.numero : timeSlotSchedule.numero}</div>
                                            <div className={style.title}>{timeSlotSchedule.title}</div>
                                        </div>
                                    }
                                </div>}

                            {/* Event type block */}
                            <div className={style.eventType}>
                                {timeSlotSchedule.type}
                            </div>

                            {/* Event category block */}
                            <div className={style.eventCategory}>
                                {timeSlotSchedule.categorie && timeSlotSchedule.categorie}
                            </div>

                            {/* Speaker information */}
                            <div className={style.eventSpeaker}>
                                {timeSlotSchedule.speaker && timeSlotSchedule.speaker.name}<br />
                                {timeSlotSchedule.speaker && timeSlotSchedule.speaker.role}
                            </div>

                            {/* Room name: amphitheatre, salle 1 ... */}
                            <div className={style.eventRoom}>
                                {timeSlotSchedule.salle}<br />
                            </div>
                        </div>);
                    })
                }
                
                {/* Closing */}
                {props.programme.fermetureHeure && 
                    <div className={style.closing}>
                        <div className={style.time}>{props.programme.fermetureHeure}</div>
                        <div className={style.closingEventTitle}>{props.programme.fermetureTitle}</div>
                    </div>
                }
            </div>
        </>
    )
};

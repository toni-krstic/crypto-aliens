import bodyMarks from '../constants/bodyMarks';
import colors from '../constants/colors';
import headShapes from '../constants/headShapes';

const styles = {
    headContainer: ` flex justify-center `,
    head: ` h-[100px] w-[100px] border-solid border-gray-600 border-2 rotate-45 z-20 `,
    eyes: ` flex relative top-[25px] left-[8px] -rotate-45 `,
    eye: ` h-[30px] w-[30px] m-[5px] bg-white border-solid border-black border-2 `,
    left_eye: ` rounded-tl-[15%] rounded-tr-[75%] rounded-bl-[75%] rounded-br-[15%] `,
    right_eye: ` rounded-tr-[15%] rounded-bl-[15%] rounded-br-[75%] rounded-tl-[75%] `,
    pupil: ` h-[25px] w-[25px] relative top-[1px] `,
    pupil_detail: ` h-[5px] w-[5px] rounded-full relative `,
    left_pupil: ` left-[1px] rounded-tl-[15%] rounded-tr-[75%] rounded-bl-[75%] rounded-br-[15%] `,
    left_pupil_detail1: ` top-[18px] left-[18px] `,
    left_pupil_detail2: ` h-[3px] w-[3px] top-[8px] left-[13px] `,
    right_pupil: ` rounded-br-[75%] rounded-tl-[75%] rounded-tr-[15%] rounded-bl-[15%] `,
    right_pupil_detail1: ` top-[18px] left-[2px] `,
    right_pupil_detail2: ` h-[3px] w-[3px] top-[8px] left-[9px] `,
    nose: ` flex -rotate-45 `,
    nostral: ` h-[5px] w-[5px] bg-black relative rounded-full top-[28px] left-[38px] m-[1px] `,
    mouth: ` h-[12px] w-[40px] bg-black relative top-[23px] left-[56px] -rotate-45 rounded-tl-[20%] rounded-tr-[20%] rounded-bl-[80%] rounded-br-[80%] `,
    mouth_detail: ` h-[3px] w-[30px] relative rounded-full top-[6px] left-[5px] `,
    bodyContainer: ` flex justify-center `,
    arm: ` h-[100px] w-[30px] border-solid border-gray-600 border-2 rounded-tl-[20%] rounded-tr-[20%] rounded-bl-[20%] rounded-br-[20%] `,
    left_arm: ` rotate-45 `,
    right_arm: ` -rotate-45 `,
    hand: ` h-[25px] w-[25px] relative rounded-[80%] border-solid border-gray-600 border-2 z-10 `,
    left_hand: ` left-[-32px] top-[-28px] `,
    right_hand: ` left-[39px] top-[-28px] `,
    fingers: ` flex `,
    finger: ` h-[25px] w-[7px] relative rounded-[50%] border-solid border-gray-600 border-2 `,
    lf1: ` left-[-39px] top-[-50px] rotate-[55deg] `,
    lf2: ` left-[-39px] top-[-40px] rotate-[30deg] `,
    lf3: ` left-[-34px] top-[-40px] -rotate-[16deg] `,
    rf1: ` left-[43px] top-[-38px] rotate-[10deg] `,
    rf2: ` left-[49px] top-[-40px] -rotate-[25deg] `,
    rf3: ` left-[50px] top-[-49px] -rotate-[52deg] `,
    body: ` h-[110px] w-[80px] rounded-[20%] border-solid border-gray-600 border-2 z-10 `,
    bodyMark: ` relative `,
    legs: ` flex justify-center `,
    leg: ` h-[100px] w-[30px] relative top-[-65px] rounded-[20%] border-solid border-gray-600 border-2 ss `,
    left_leg: ` rotate-[15deg] left-[-10px] `,
    right_leg: ` -rotate-[15deg] left-[10px] `,
    foot: ` h-[20px] w-[45px] relative border-solid border-gray-600 border-2 `,
    left_foot: ` top-[95px] left-[-20px] rounded-tl-[90%] rounded-tr-[0%] rounded-br-[70%] rounded-bl-[75%] `,
    right_foot: ` top-[95px] left-[2px] rounded-tl-[0%] rounded-tr-[90%] rounded-br-[75%] rounded-bl-[70%] `,
};

const Alien = ({DNA}) => {
    return (
        <>
            <div className={styles.headContainer}>
                <div className={styles.head} style={{ backgroundColor: colors[DNA.slice(1, 4)], borderRadius: headShapes[DNA.slice(0, 1)] }}>
                    <div className={styles.eyes}>
                        <div className={[styles.eye, styles.left_eye]}>
                            <div className={[styles.pupil, styles.left_pupil]} style={{ backgroundColor: colors[DNA.slice(7, 10)] }}>
                                <div className={[styles.pupil_detail, styles.left_pupil_detail1]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                                <div className={[styles.pupil_detail, styles.left_pupil_detail2]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                            </div>
                        </div>
                        <div className={[styles.eye, styles.right_eye]}>
                            <div className={[styles.pupil, styles.right_pupil]} style={{ backgroundColor: colors[DNA.slice(7, 10)] }}>
                                <div className={[styles.pupil_detail, styles.right_pupil_detail1]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                                <div className={[styles.pupil_detail, styles.right_pupil_detail2]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nose}>
                        <div className={[styles.nostral, styles.left_nostral]}></div>
                        <div className={[styles.nostral, styles.right_nostral]}></div>
                    </div>
                    <div className={styles.mouth}>
                        <div className={styles.mouth_detail} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                    </div>
                </div>
            </div>
            <div className={styles.bodyContainer}>
                <div className={styles.handContainer}>
                    <div className={[styles.arm, styles.left_arm]} style={{ backgroundColor: colors[DNA.slice(1, 4)] }}></div>
                    <div className={[styles.hand, styles.left_hand]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                    <div className={styles.fingers}>
                        <div className={[styles.finger, styles.lf1]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                        <div className={[styles.finger, styles.lf2]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                        <div className={[styles.finger, styles.lf3]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                    </div>
                </div>
                <div className={styles.body} style={{ backgroundColor: colors[DNA.slice(1, 4)] }}>
                    <div className={styles.bodyMark} style={{
                        backgroundColor: colors[DNA.slice(4, 7)],
                        height: bodyMarks[DNA.slice(10, 11)][0],
                        width: bodyMarks[DNA.slice(10, 11)][1],
                        top: bodyMarks[DNA.slice(10, 11)][2],
                        left: bodyMarks[DNA.slice(10, 11)][3],
                        transform: `rotate(${bodyMarks[DNA.slice(10, 11)][4]})`,
                        borderRadius: bodyMarks[DNA.slice(10, 11)][5]
                    }}></div>
                    <div className={styles.bodyMark} style={{
                        backgroundColor: colors[DNA.slice(4, 7)],
                        height: bodyMarks[DNA.slice(10, 11)][6],
                        width: bodyMarks[DNA.slice(10, 11)][7],
                        top: bodyMarks[DNA.slice(10, 11)][8],
                        left: bodyMarks[DNA.slice(10, 11)][9],
                        transform: `rotate(${bodyMarks[DNA.slice(10, 11)][10]})`,
                        borderRadius: bodyMarks[DNA.slice(10, 11)][11]
                    }}></div>
                    <div className={styles.bodyMark} style={{
                        backgroundColor: colors[DNA.slice(4, 7)],
                        height: bodyMarks[DNA.slice(10, 11)][12],
                        width: bodyMarks[DNA.slice(10, 11)][13],
                        top: bodyMarks[DNA.slice(10, 11)][14],
                        left: bodyMarks[DNA.slice(10, 11)][15],
                        transform: `rotate(${bodyMarks[DNA.slice(10, 11)][16]})`,
                        borderRadius: bodyMarks[DNA.slice(10, 11)][17]
                    }}></div>
                </div>
                <div className={styles.handContainer}>
                    <div className={[styles.arm, styles.right_arm]} style={{ backgroundColor: colors[DNA.slice(1, 4)] }}></div>
                    <div className={[styles.hand, styles.right_hand]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                    <div className={styles.fingers}>
                        <div className={[styles.finger, styles.rf1]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                        <div className={[styles.finger, styles.rf2]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                        <div className={[styles.finger, styles.rf3]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                    </div>
                </div>
            </div>
            <div className={styles.legs}>
                <div className={[styles.leg, styles.left_leg]} style={{ backgroundColor: colors[DNA.slice(1, 4)] }}>
                    <div className={[styles.foot, styles.left_foot]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                </div>
                <div className={[styles.leg, styles.right_leg]} style={{ backgroundColor: colors[DNA.slice(1, 4)] }}>
                    <div className={[styles.foot, styles.right_foot]} style={{ backgroundColor: colors[DNA.slice(4, 7)] }}></div>
                </div>
            </div>
        </>
    )
}

export default Alien
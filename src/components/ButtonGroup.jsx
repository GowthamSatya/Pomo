import React from 'react'



const ButtonGroup = () => {
<<<<<<< Updated upstream
    return (
        <div>ButtonGroup</div>
=======
    const { color } = useTheme();
    const { ticking, toggleTimer, toggleSettingsModal, nextState } = useTimer()

    return (
        <div className='my-2 flex gap-4 items-center justify-center'>
            <button onClick={toggleSettingsModal} className={`w-[80px] h-[80px] rounded-3xl settings-btn flex items-center justify-center ${color.iconBgColor}`}>
                <MoreDotsIcon size={28} className='mt-0.5 ml-0.5' color={`${color.fillColor}`} />
            </button>
            <button onClick={toggleTimer} className={`w-[128px] h-[96px]  rounded-[32px] settings-btn flex items-center justify-center ${color.mainBtnColor}`}>
                {!ticking ? (
                    <PlayIcon size={32} className='flex items-center justify-center' color={`${color.fillColor}`} />
                ) : (
                    <PauseIcon size={32} className='flex items-center justify-center' color={`${color.fillColor}`} />
                )}

            </button>
            <button onClick={nextState} className={`w-[80px] h-[80px] rounded-3xl settings-btn flex items-center justify-center ${color.iconBgColor}`}>
                <FastForwardIcon size={28} className='ml-0.5' color={`${color.fillColor}`} />
            </button>
        </div>
>>>>>>> Stashed changes
    )
}

export default ButtonGroup
import React from 'react'

function IfElseSample() {

    let onlineStatus = false;

    return (
        <>
            {
                onlineStatus == true ? (<span>Kullanıcı Online !</span>) : (<span>Kullanıcı Offline !</span>) //Kullancı durumunu ternary if ile denetliyoruz.
            }
            {
                user && (<span>Bu hayatın heyecanı meyecanı yok !</span>) //Null olma durumunu da bu şekilde inceliyoruz.Data yoksa null veya undefined ise bu kontrolü yapıyoruz. Önemlidir.
            }
        </>
    )
}

export default IfElseSample

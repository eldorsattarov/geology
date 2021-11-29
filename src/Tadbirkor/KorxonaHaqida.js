import React, {useState} from 'react';
import TadbirkorLayout from "../components/TadbirkorLayout";
import DropdownItem2 from "../components/About/DropdownItem2";
import {Collapse} from "react-collapse";

const KorxonaHaqida = (props) => {
    const [isDropdownOpen, setisDropdownOpen] = useState(false);
    const [isDropdownOpen2, setisDropdownOpen2] = useState(false);
    const [isDropdownOpen3, setisDropdownOpen3] = useState(false);
    const [isDropdownOpen4, setisDropdownOpen4] = useState(false);

    const onDropdownClicked = () => {
        setisDropdownOpen(!isDropdownOpen);
    };
    const onDropdownClicked2 = () => {
        setisDropdownOpen2(!isDropdownOpen2);
    };
    const onDropdownClicked3 = () => {
        setisDropdownOpen3(!isDropdownOpen3);
    };
    const onDropdownClicked4 = () => {
        setisDropdownOpen4(!isDropdownOpen4);
    };
    return (
        <TadbirkorLayout history={props.history}>
            <div className="korxonaXaqida">
                <div className="container">
                    <div className="row">
                        <div className="col-12 korxonaXaqidatop">
                            <h3>ООО "Стронг Стоун Гроуп" </h3>
                        </div>
                        {/*Drop */}
                        <div className="w-100 mt-5 korxonaDrop">
                            <DropdownItem2 theme="white">
                                <div className="col-12">
                                    <div className="card" onClick={() => onDropdownClicked()}>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h1>Тадбиркор </h1>
                                                <button className="border-0 bg-transparent"
                                                        onClick={() => onDropdownClicked()}>
                                                    <img
                                                        src={`${isDropdownOpen !== true ? "../images/tadpast.png" : "../images/tadtepa.png"}`}
                                                    />
                                                </button>
                                            </div>
                                            <Collapse isOpened={isDropdownOpen}>
                                                <div className="row mt-3">
                                                    <div className="col-4">
                                                        <h5>Раҳбар ФИШ</h5>
                                                        <p>Шавкат Холназаров Кахрамонович</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <h5>СТИР</h5>
                                                        <p>204554101</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <h5>ИФУТ</h5>
                                                        <p>13930</p>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div>
                                </div>
                            </DropdownItem2>
                        </div>
                        <div className="w-100 mt-3 korxonaDrop">
                            <DropdownItem2 theme="white">
                                <div className="col-12">
                                    <div className="card" onClick={() => onDropdownClicked2()}>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h1>Корхона манзили</h1>
                                                <button className="border-0 bg-transparent"
                                                        onClick={() => onDropdownClicked2()}>
                                                    <img
                                                        src={`${isDropdownOpen2 !== true ? "../images/tadpast.png" : "../images/tadtepa.png"}`}
                                                    />
                                                </button>
                                            </div>
                                            <Collapse isOpened={isDropdownOpen2}>
                                                <div className="row mt-3">
                                                    <div className="col-4">
                                                        <h5>Худуд</h5>
                                                        <p>Навоий вилояти</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <h5>Туман</h5>
                                                        <p>Нурота тумани</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <h5>Манзил</h5>
                                                        <p>Миробод тумани Тарас Шевченко кўчаси. 11-А</p>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div>
                                </div>
                            </DropdownItem2>
                        </div>
                        <div className="w-100 mt-3 korxonaDrop">
                            <DropdownItem2 theme="white">
                                <div className="col-12">
                                    <div className="card" onClick={() => onDropdownClicked3()}>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h1>Алоқа маълумотлари</h1>
                                                <button className="border-0 bg-transparent"
                                                        onClick={() => onDropdownClicked3()}>
                                                    <img
                                                        src={`${isDropdownOpen3 !== true ? "../images/tadpast.png" : "../images/tadtepa.png"}`}
                                                    />
                                                </button>
                                            </div>
                                            <Collapse isOpened={isDropdownOpen3}>
                                                <div className="row mt-3">
                                                    <div className="col-4">
                                                        <h5>Худуд</h5>
                                                        <p>Навоий вилояти</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <h5>Туман</h5>
                                                        <p>Нурота тумани</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <h5>Манзил</h5>
                                                        <p>Миробод тумани Тарас Шевченко кўчаси. 11-А</p>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div>
                                </div>
                            </DropdownItem2>
                        </div>
                        <div className="w-100 mt-3 korxonaDrop">
                            <DropdownItem2 theme="white">
                                <div className="col-12">
                                    <div className="card" onClick={() => onDropdownClicked4()}>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h1>Хизмат курсатувчи банк буйича маълумотлар</h1>
                                                <button className="border-0 bg-transparent"
                                                        onClick={() => onDropdownClicked4()}>
                                                    <img
                                                        src={`${isDropdownOpen4 !== true ? "../images/tadpast.png" : "../images/tadtepa.png"}`}
                                                    />
                                                </button>
                                            </div>
                                            <Collapse isOpened={isDropdownOpen4}>
                                                <div className="row mt-3">
                                                    <div className="col-4">
                                                        <h5>Худуд</h5>
                                                        <p>Навоий вилояти</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <h5>Туман</h5>
                                                        <p>Нурота тумани</p>
                                                    </div>
                                                    <div className="col-4">
                                                        <h5>Манзил</h5>
                                                        <p>Миробод тумани Тарас Шевченко кўчаси. 11-А</p>
                                                    </div>
                                                </div>
                                            </Collapse>
                                        </div>
                                    </div>
                                </div>
                            </DropdownItem2>
                        </div>

                    </div>
                </div>
            </div>
        </TadbirkorLayout>
    );
};

export default KorxonaHaqida;

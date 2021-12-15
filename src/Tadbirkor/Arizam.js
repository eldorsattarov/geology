import React from 'react';
import TadbirkorLayout from "../components/TadbirkorLayout";
import {AvForm, AvField} from "availity-reactstrap-validation";
import {Label} from "reactstrap";
import {Link} from "react-router-dom";

const ArizaYuborish = (props) => {
    return (
        <TadbirkorLayout history={props.history}>
           <div className="arizam">
               <div className="arizaYuborish">
                   <div className="container">
                       <div className="row">
                           <div className="col-12">
                               <div className="nextPage">
                                   <Link to="/tadbirkor/meningarizam">
                                       <img src="/images/imga1.png"/>
                                   </Link>
                               </div>
                           </div>
                           <div className="col-12 arizaYuborishtop">
                               <h3 className="text-center">Аризам</h3>
                           </div>
                       </div>
                       <div className="mt-3">
                           <AvForm className="w-100">
                               <div className="row mt-2 arizaYuborishMenu">
                                   <div className="col-6">
                                       <div className="arizaYuborishMenuLeft">
                                           <Label><span>Вилоят</span></Label>
                                           <AvField type="select" name="text" className="w-100 avfield">
                                               <option>Навоий вилояти</option>
                                               <option>Навоий вилояти</option>
                                           </AvField>
                                       </div>
                                   </div>
                                   <div className="col-2 arizaYuborishMeneRight d-flex align-items-center justify-content-center">
                                       <div className="colLeft">
                                           <span className="spanNomer">1</span>
                                           <img src="../images/circle3.png"/>
                                       </div>
                                   </div>
                                   <div className="col-2 arizaYuborishMeneRight">
                                       <Label><span>Северная широта</span></Label>
                                       <div className="d-flex justify-content-between arizaYuborishMeneRight1">
                                           <div className="kvadrat">10°</div>
                                           <div className="kvadrat">10°</div>
                                           <div className="kvadrat">10°</div>
                                       </div>
                                   </div>
                                   <div className="col-2 arizaYuborishMeneRight">
                                       <Label><span>Восточная долгота</span></Label>
                                       <div className="d-flex justify-content-between arizaYuborishMeneRight1">
                                           <div className="kvadrat">10°</div>
                                           <div className="kvadrat">10°</div>
                                           <div className="kvadrat">10°</div>
                                       </div>
                                   </div>
                                   {/*<div className="col-2 arizaYuborishMeneRight">*/}
                                   {/*    <Label></Label>*/}
                                   {/*    <div className="arizaYuborishMeneRight1">*/}
                                   {/*        <button type="button">Удалить</button>*/}
                                   {/*    </div>*/}
                                   {/*</div>*/}
                               </div>
                               <div className="row mt-2 arizaYuborishMenu">
                                   <div className="col-6">
                                       <div className="arizaYuborishMenuLeft">
                                           <Label><span>Хом-ашё тури</span></Label>
                                           <AvField type="select" name="text" className="w-100 avfield">
                                               <option>Навоий вилояти</option>
                                               <option>Навоий вилояти</option>
                                           </AvField>
                                       </div>
                                   </div>
                                   <div className="col-2 arizaYuborishMeneRight d-flex align-items-center justify-content-center">
                                       <div className="colLeft">
                                           <span className="spanNomer">2</span>
                                           <img src="../images/circle3.png"/>
                                       </div>
                                   </div>
                                   <div className="col-2 arizaYuborishMeneRight">
                                       <Label><span>Северная широта</span></Label>
                                       <div className="d-flex justify-content-between arizaYuborishMeneRight1">
                                           <div className="kvadrat">10°</div>
                                           <div className="kvadrat">10°</div>
                                           <div className="kvadrat">10°</div>
                                       </div>
                                   </div>
                                   <div className="col-2 arizaYuborishMeneRight">
                                       <Label><span>Восточная долгота</span></Label>
                                       <div className="d-flex justify-content-between arizaYuborishMeneRight1">
                                           <div className="kvadrat">10°</div>
                                           <div className="kvadrat">10°</div>
                                           <div className="kvadrat">10°</div>
                                       </div>
                                   </div>
                                   {/*<div className="col-2 arizaYuborishMeneRight">*/}
                                   {/*    <Label></Label>*/}
                                   {/*    <div className="arizaYuborishMeneRight1">*/}
                                   {/*        <button type="button">Удалить</button>*/}
                                   {/*    </div>*/}
                                   {/*</div>*/}
                               </div>
                               <div className="row mt-2 arizaYuborishMenu">
                                   <div className="col-6">
                                       <div className="arizaYuborishMenuLeft">
                                           <Label><span>Туман/Шахар</span></Label>
                                           <AvField type="select" name="text" className="w-100 avfield">
                                               <option>Навоий вилояти</option>
                                               <option>Навоий вилояти</option>
                                           </AvField>
                                       </div>
                                   </div>
                                   <div className="col-2 arizaYuborishMeneRight d-flex align-items-center justify-content-center">
                                       <div className="colLeft">
                                           <span className="spanNomer">3</span>
                                           <img src="../images/circle3.png"/>
                                       </div>
                                   </div>
                                   <div className="col-2 arizaYuborishMeneRight">
                                       <Label><span>Северная широта</span></Label>
                                       <div className="d-flex justify-content-between arizaYuborishMeneRight1">
                                           <div className="kvadrat">10°</div>
                                           <div className="kvadrat">10°</div>
                                           <div className="kvadrat">10°</div>
                                       </div>
                                   </div>
                                   <div className="col-2 arizaYuborishMeneRight">
                                       <Label><span>Восточная долгота</span></Label>
                                       <div className="d-flex justify-content-between arizaYuborishMeneRight1">
                                           <div className="kvadrat">10°</div>
                                           <div className="kvadrat">10°</div>
                                           <div className="kvadrat">10°</div>
                                       </div>
                                   </div>
                                   {/*<div className="col-2 arizaYuborishMeneRight">*/}
                                   {/*    <Label></Label>*/}
                                   {/*    <div className="arizaYuborishMeneRight1">*/}
                                   {/*        <button type="button">Удалить</button>*/}
                                   {/*    </div>*/}
                                   {/*</div>*/}
                               </div>
                               <div className="row mt-2 arizaYuborishMenu">
                                   <div className="col-6">
                                       <div className="arizaYuborishMenuLeft">
                                           <Label><span>Телеграм бор телефон</span></Label>
                                           <AvField type="number" name="text" className="w-100 avfield"></AvField>
                                       </div>
                                   </div>
                                   {/*<div className="col-6 arizaYuborishMeneRight">*/}
                                   {/*    <Label></Label>*/}
                                   {/*    <div className="arizaYuborishMeneRight1">*/}
                                   {/*        <button type="button" className="d-block ml-auto buttonPrimary">Добавить</button>*/}
                                   {/*    </div>*/}
                                   {/*</div>*/}
                               </div>
                               <div className="row mt-3">
                                   <div className="col-12 arizaYuborishtop">
                                       <h3>Тадбиркор </h3>
                                   </div>
                               </div>
                               <div className="row mt-2 arizaYuborishMenu">
                                   <div className="col-6">
                                       <div className="arizaYuborishMenuLeft">
                                           <Label><span>СТИР</span></Label>
                                           <AvField type="text" name="text" className="w-100 avfield">

                                           </AvField>
                                       </div>
                                   </div>
                                   <div className="col-6">
                                       <div className="arizaYuborishMenuLeft">
                                           <Label><span>Ташкилий-хукукий шакли</span></Label>
                                           <AvField type="select" name="text" className="w-100 avfield">
                                               <option>Навоий вилояти</option>
                                               <option>Навоий вилояти</option>
                                           </AvField>
                                       </div>
                                   </div>

                               </div>
                               <div className="row mt-2 arizaYuborishMenu">
                                   <div className="col-6">
                                       <div className="arizaYuborishMenuLeft">
                                           <Label><span>Корхона номи   </span></Label>
                                           <AvField type="text" name="text" className="w-100 avfield">

                                           </AvField>
                                       </div>
                                   </div>
                                   <div className="col-6">
                                       <div className="arizaYuborishMenuLeft">
                                           <Label><span>Раҳбар ФИШ</span></Label>
                                           <AvField type="text" name="text" className="w-100 avfield">

                                           </AvField>
                                       </div>
                                   </div>
                               </div>
                               <div className="row mt-2 arizaYuborishMenu">
                                   <div className="col-6">
                                       <div className="arizaYuborishMenuLeft">
                                           <Label><span>ИФУТ</span></Label>
                                           <AvField type="text" name="text" className="w-100 avfield">

                                           </AvField>
                                       </div>
                                   </div>

                               </div>
                               <div className="row mt-3">
                                   <div className="col-12 arizaYuborishtop">
                                       <h3>Хизмат курсатувчи банк буйича маълумотлар</h3>
                                   </div>
                               </div>
                               <div className="row mt-2 arizaYuborishMenu">
                                   <div className="col-6">
                                       <div className="arizaYuborishMenuLeft">
                                           <Label><span>Хизмат курсатувчи банк МФО раками</span></Label>
                                           <AvField type="text" name="text" className="w-100 avfield">

                                           </AvField>
                                       </div>
                                   </div>
                                   <div className="col-6">
                                       <div className="arizaYuborishMenuLeft">
                                           <Label><span>Хизмат курсатувчи банк номи</span></Label>
                                           <AvField type="text" name="text" className="w-100 avfield">

                                           </AvField>
                                       </div>
                                   </div>
                               </div>
                               <div className="row mt-2 arizaYuborishMenu">
                                   <div className="col-6">
                                       <div className="arizaYuborishMenuLeft">
                                           <Label><span>Хисоб ракам (Асосий)</span></Label>
                                           <AvField type="text" name="text" className="w-100 avfield">

                                           </AvField>
                                       </div>
                                   </div>
                               </div>
                               <div className="row mt-3">
                                   <div className="col-12 arizaYuborishMeneRight">
                                       <div className="arizaYuborishMeneRight1 d-flex justify-content-end">
                                         <div className="ariz">
                                             <div className="d-flex align-items-center">
                                                 <p className="mb-0 pb-0 mr-2 mt-1">Жавоб:</p>
                                                 <img src="/images/ima5.png"/>
                                             </div>
                                             <div className="arizaFayl">
                                                 <span>Ариза файл</span>
                                                 <a href="#"> <img src="/images/ima4.png"/></a>
                                             </div>
                                         </div>
                                        </div>
                                   </div>
                               </div>

                           </AvForm>
                       </div>
                   </div>
               </div>
           </div>
        </TadbirkorLayout>
    );
};

export default ArizaYuborish;

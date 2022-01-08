import React, {Component, useState, useEffect} from "react";
import axios from 'axios';
import {AvForm , AvField} from "availity-reactstrap-validation";
import PaginationComponent from "./PaginationComponent";
import Header from "../Header";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Footer from "../Footer";
import {Label} from "reactstrap";

class Pagination extends Component {
    state = {
        data: [],
        totalRecords: 0,
        limit: 6,
        age: '',
        age2: ''
    }
    componentDidMount() {
        this.loadData(1);
    }

    loadData = (page) => {
        // console.log('page>>', page)
        axios.get(`https://reqres.in/api/users?page=` + page)
            .then(res => {
                const data = res.data;
                console.log('data>>>>', data)
                this.setState({
                    data: data.data,
                    totalRecords: data.total ? data.total : 0,
                    limit: data.per_page ? data.per_page : 6
                })
            });
    }
    getPaginatedData = page => {
        this.loadData(page);
    }


    handleChange = (event) => {
        this.setState({age: event.target.value})
        // setAge(event.target.value);
    };
    handleChange2 = (event) => {
        this.setState({age2: event.target.value})
        // setAge2(event.target.value);
    };

    render() {
        const {data, totalRecords, limit} = this.state;

        return (
            <div>
                <Header/>

               <div className="mineralResours">
                   <div className="mineralResources1">
                       <div className="container">
                           <AvForm>
                           <div className="row">
                               <div className="col-12 d-flex justify-content-between align-items-center pl-0 pr-0">
                                   <h1>Минерал ресурслар базаси</h1>
                                   <button type="button" className="">
                                       <img src="./images/arrow-down.png"/>
                                       <span>Экспорт</span>
                                   </button>
                               </div>
                           </div>
                               <div className="row">
                                <div className="col-6 pl-0">
                                    <Label>Тоғ-кон хом ашёлари</Label>
                                    <AvField type="select" name="select" className="avfieldMineral">
                                        <option>Минерал тола ишлаб чиқариш учун хом ашё (минг тонна)</option>
                                    </AvField>
                                </div>
                                <div className="col-6 pr-0">
                                    <Label>Қурилиш материаллари</Label>
                                    <AvField type="select" name="select" className="avfieldMineral">
                                        <option>Қолиплаш материаллари (минг тонна)</option>
                                    </AvField>
                                </div>
                               </div>
                               <div className="row">
                                <div className="col-4 pl-0">
                                    <Label>Вилоятлар</Label>
                                    <AvField type="select" name="select" className="avfieldMineral">
                                        <option>Самарқанд</option>

                                    </AvField>
                                </div>
                                <div className="col-4">
                                    <Label>Туманлар</Label>
                                    <AvField type="select" name="select" className="avfieldMineral">
                                        <option>Нурабадский</option>
                                    </AvField>
                                </div>
                                   <div className="col-4 d-flex align-items-end justify-content-end">
                                       <span>Очистить фильтр</span>
                                       <img src="./images/fi_x5.png"/>
                                   </div>
                               </div>
                               </AvForm>
                       </div>
                   </div>

                   <div className="container asd">
                       <div className="row mineralResourcesScroll">
                           <div className="container">
                               <table className="tablePagination">
                                   <thead>
                                   <tr>
                                       <th className="align-middle bt-0">№ <br/>п/п</th>
                                       <th className="align-middle bt-0">Тоғ-кон хом<br/> ашёлари</th>
                                       <th className="align-middle bt-0">Конлар номи ва жойлашиш <br/>манзили
                                       </th>
                                       <th>А+Б+С1 тоифадаги<br/>
                                           захиралар ҳолати
                                       </th>
                                       <th>С2  тоифадаги<br/> захиралар ҳолати
                                       </th>
                                       <th>
                                           Фойдаланганлик<br/> тўғрисидаги маълумотлар
                                       </th>
                                       <th>Фойдаланганлик<br/> тўғрисидаги маълумотлар<br/>
                                           Лицензия № ва санаси
                                       </th>
                                       <th>2019 йилдаги<br/> қазиб олиш ҳажми
                                       </th>
                                       <th>Идоравий мансубликь
                                       </th>
                                       <th>Захиралар
                                           тасдиқланган
                                           йил, баённома №
                                       </th>
                                       <th>Хом ашё</th>
                                       <th>Вилоят</th>
                                       <th>Туман</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                   {
                                       data && data.length > 0 ?
                                           data.map((item, index) => (
                                               <tr className="mapTr">
                                                   <td scope="col">{item.id}</td>
                                                   <td scope="col">{item.first_name}</td>
                                                   <td scope="col">{item.first_name} - {item.last_name}</td>
                                                   <td scope="col">{item.first_name} - {item.last_name}</td>
                                                   <td scope="col">{item.first_name} - {item.last_name}</td>
                                                   <td scope="col">{item.first_name} - {item.last_name}</td>
                                                   <td scope="col">{item.first_name} - {item.last_name}</td>
                                                   <td scope="col">{item.first_name} - {item.last_name}</td>
                                                   <td scope="col">{item.first_name} - {item.last_name}</td>
                                                   <td scope="col">{item.first_name} - {item.last_name}</td>
                                                   <td scope="col">{item.first_name} - {item.last_name}</td>
                                                   <td scope="col">{item.first_name} - {item.last_name}</td>
                                                   <td scope="col">{item.email}</td>
                                               </tr>
                                           )) :
                                           <h4>No Data Found!!</h4>
                                   }
                                   </tbody>
                               </table>
                           </div>
                       </div>
                   </div>
                   <div className="container">
                       <div className="row mt-3 pl-0 paginationIndex">
                           {totalRecords > 6 &&
                           <PaginationComponent
                               getAllData={this.getPaginatedData}
                               totalRecords={totalRecords}
                               itemsCountPerPage={limit}/>
                           }
                       </div>
                   </div>
               </div>
                <Footer/>
            </div>
        );
    }
}

export default Pagination;

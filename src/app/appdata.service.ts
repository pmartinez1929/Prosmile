import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  MessageAppoinment } from './interfaces';
//import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  arrayAutodiagnostico:any=[
    {
      id:0,
      question:"1. ¿Tiene mal sabor en la boca o mal aliento?",
      answer:"El mal sabor y mal aliento en la boca es posiblemente síntoma de que hay algún problema digestivo o bucal. Cuando existe alguna infección en la boca es posible que se presente mal olor y también alguna secreción. Adicionalmente, en caso que el paciente no se cepille diariamente los dientes y no utilice hilo dental y enjuague, es muy probable que se acumule placa bacteriana la cual causa un mal aliento. Una revisión por parte de su odontólogo detectará la fuente del problema y a través de un plan de tratamiento y una limpieza profunda se podrá eliminar el inconveniente.",
      isPositive:false,
      isAnswer:false,
    },
    {
      id:1,
      question:"2. ¿Al comer o beber alimentos fríos o calientes tiene algún tipo de malestar en sus dienes o boca?",
      answer:"Sí esto le sucede puede ser causa de una caries, un desgaste en un cuello dental o por una inflamación en el nervio del diente (parte interna del diente que le da vida a este). Una vez detectado el problema, le daremos un diagnostico y plan de tratamiento para ponerle fin al malestar.",
      isPositive:false,
      isAnswer:false,
    },
    {
      id:2,
      question:"3. Nota que le sangran las encías cuando se cepilla los dientes:",
      answer:'Si usted tienes este problema es porque hay una enfermedad llamada "gingivitis". En su estado inicial simplemente hay un cambio de color en la encía, luego empieza a sangrar un poco al cepillarse los dientes y si no se pone remedio puedes llegar inclusive a perder algún diente. Es importante que nos visite para diagnosticar si solo con una limpieza bucal profunda es posible resolver tu problema o es necesario que le vea nuestro periodoncista para que le realice otros tratamientos.',
      isPositive:false,
      isAnswer:false,
    },
    {
      id:3,
      question:"4. Le cuesta trabajo masticar o no tritura los alimentos con facilidad por alguno de los lados de la boca:",
      answer:"Cuando la masticación es difícil es evidente que algo no funciona bien en nuestra boca. Si no tenemos todas las piezas dentales, o tenemos una prótesis dental mal ajustada el paciente presentara molestias al masticar y al comer cualquier alimento. Otra causa del problema es que sus dientes no encajen bien entre ellos, por lo que no realizan correctamente todas las funciones como deberían. Es importante que nos visite,  para detectar el problema y darle un diagnostico completo para poder ofrecerle un tratamiento que solucione el malestar. En este caso la solución puede ser un tratamiento de ortodoncia o reposición de piezas con el rehabilitador.",
      isPositive:false,
      isAnswer:false,
    },
    {
      id:4,
      question:"5. Ha notado cambios de color o manchas en algún diente:",
      answer:"Cuando los dientes cambian de color puede ser debido a los hábitos de alimentación (tomar mucho café, vino, o fumar). A través de tratamientos de blanqueamiento podemos solucionar el problema y aclarar sus dientes. En el caso que el cambio de color sea en un solo diente es necesario una radiografía para detectar si el diente tiene algún problema. Visitándonos le daremos una solución inmediata al inconveniente.",
      isPositive:false,
      isAnswer:false,
    },
    {
      id:5,
      question:"6. ¿Siente dolores de cabeza, musculares en zona de cabeza y cuello le suena la mandíbula al abrirla?",
      answer:"Puede ser un  problema con la articulación de la mandíbula, al visitarnos podemos aclarar si el dolor se genera por dientes en mala posición, lo cual el ortodoncista le ayudará o si es otro tipo de trastorno que nuestro especialista en oclusión le explicará de mejor manera.",
      isPositive:false,
      isAnswer:false,
    },
    {
      id:6,
      question:"7. Ronca, respira por la boca en vez de por la nariz o no puede pronunciar bien ciertas letras:",
      answer:"Si la lengua no esta correctamente posicionada en la cavidad bucal o sus dientes de adelante no están en una correcta posición puede tener uno de estos problemas, nuestro especialista en ortodoncia le guiará y solucionará estos problemas.",
      isPositive:false,
      isAnswer:false,
    },
    {
      id:7,
      question:"8. La estética de tus dientes le disguta:",
      answer:"Una boca sana y una sonrisa cuidada es nuestro principal objetivo para cada uno de nuestros pacientes.  Consúltenos que le ofreceremos diversas maneras para solucionar su problema de acuerdo a su economía y a lo que usted desearía tener.",
      isPositive:false,
      isAnswer:false,
    }];

    arrayTratamientos=[
      {
        id:0,
        name:"Rehabilitación Oral",
        description:"Reposición de las diferentes piezas dentales a base de prótesis y reconstrucción estética de la forma de los dientes.",
        image:"tratamientos/1.jpg",
        icon:"tratamientos/ico-rehabilitacionoral.svg"
      },
      {
        id:1,
        name:"Endodoncia",
        description:"Tratamiento de la pulpa dentaria",
        image:"tratamientos/2.jpg",
        icon:"tratamientos/ico-endodoncia.svg"
      },
      {
        id:2,
        name:"Ortopedia y Ortodoncia",
        description:"Especialidades que trata de la correcta ubicación de las piezas dentarias en los maxilares.",
        image:"tratamientos/3.jpg",
        icon:"tratamientos/ico-ortopedia.svg"
      },
      {
        id:3,
        name:"Odontopediatría",
        description:"Especialidad que permite atender diferentes tratamientos dentarios a niños.",
        image:"tratamientos/4.jpg",
        icon:"tratamientos/ico-odontopediatria.svg"
      },
      {
        id:4,
        name:"Periodoncia",
        description:"Tratamiento de todas las afecciones de los tejidos blandos y duros del entorno del diente.",
        image:"tratamientos/5.jpg",
        icon:"tratamientos/ico-peridoncia.svg"
      },
      {
        id:5,
        name:"Cirugía dental y Maxilofacial",
        description:"Actos quirúrgicos que permite realizar desde una extracción dental simples y complejas, hasta arreglar fracturas maxilares.",
        image:"tratamientos/1.jpg",
        icon:"tratamientos/ico-cirugiadental.svg"
      },
      {
        id:6,
        name:"Estética",
        description:"Tratamientos para el embellecimiento dentario.",
        image:"tratamientos/2.jpg",
        icon:"tratamientos/ico-estetica.svg"
      },
      {
        id:7,
        name:"Oclusión",
        description:"Estudia la correcta mordida y la articulación temporo-mandibular.",
        image:"tratamientos/3.jpg",
        icon:"tratamientos/ico-oclusion.svg"
      },
      {
        id:8,
        name:"Implantología",
        description:"Diagnóstico y reposición de piezas dentales valiéndose de la colocación de aditamentos bio-compatibles de titanio que vienen a reemplazar a la raíz natural.",
        image:"tratamientos/4.jpg",
        icon:"tratamientos/ico-implantologia.svg"
      },
      {
        id:9,
        name:"Salud Oral y Prevención",
        description:"Diferentes métodos para tratar las afecciones bucales y aplicar las mejores políticas de prevención y curación",
        image:"tratamientos/5.jpg",
        icon:"tratamientos/ico-saludoral.svg"
      },
      {
        id:10,
        name:"Laboratorio Dental",
        description:"ProSmile cuenta con su propio laboratorio dental llamado Labident. El laboratorio tiene la capacidad de realizar cualquier trabajo especializado.",
        image:"tratamientos/1.jpg",
        icon:"tratamientos/ico-laboratoriodental.svg"
      }];

      arrayEspecialistas:any=[
        {
          id:0,
          name:"Dr. Eduardo Flores",
          image:"especialistas/e_flores.gif",
          shortdescription:"Especialidad: Rehabilitación Oral<br/>Decano Facultad de Odontología"
        },
        {
          id:1,
          name:"Dra. Maria Elena Flores",
          image:"especialistas/m_flores.png",
          shortdescription:"Especialidad: Rehabilitación Oral, Oclusión y Estética Dental"
        },
        {
          id:2,
          name:"Dra. Maria Fernanda Mora",
          image:"especialistas/mf_mora.gif",
          shortdescription:"Especialidad: Endodoncia"
        },
        {
          id:3,
          name:"Dra. Karol Tat\xe9s",
          image:"especialistas/k_tates.gif",
          shortdescription:"Especialidad: Ortodoncia, Ortopedia, Odontopediatr\xeda",
        },
        {
          id:4,
          name:"Dra. Eliana Aldaz",
          image:"especialistas/e_aldaz.gif",
          shortdescription:"Especialidad: Odontopediatría, Rehabilitación Oral",
        },
        {
          id:5,
          name:"Dra. Adriana Lasso",
          image:"especialistas/a_lasso.gif",
          shortdescription:"Especialidad: Rehabilitación Oral"
        },
        {
          id:6,
          name:"Dra. Ana Gaibor",
          image:"especialistas/a_gaibor.gif",
          shortdescription:"Especialidad: Implantología, Periodoncia"
        },
        {
          id:7,
          name:"Dra. Elizabeth Zeas",
          image:"especialistas/e_zeas.gif",
          shortdescription:"Especialidad: Cirugía Maxilofacial",
        },
        {
          id:8,
          name:"Dra. Carolina Gudiño",
          image:"especialistas/c_gudino.gif",
          shortdescription:"Especialidad: Endodoncia"
        },
        {
          id:9,
          name:"Dr. Eduardo Garrido",
          image:"especialistas/e_garrido.gif",
          shortdescription:"Especialidad: Implantología, Periodoncia, Rehabilitación Oral"
        },
        {
          id:10,
          name:"Dra. Verónica Caisa",
          image:"especialistas/v_caisa.gif",
          shortdescription:"Especialidad: Ortodoncia"
        },
        {
          id:11,
          name:"Dra. Andrea Guerrero",
          image:"especialistas/a_guerrero.gif",
          shortdescription:"Especialidad: Rehabilitación Oral, Radiología Bucomaxilofacial"
        },
        {
          id:12,
          name:"Dra. Andrea Ruiz",
          image:"especialistas/a_ruiz.gif",
          shortdescription:"Especialidad: Radiología Bucomaxilofacial"
        },
        {
          id:13,
          name:"Dra. Zaira Cueva",
          image:"especialistas/z_cueva.gif",
          shortdescription:"Especialidad: Administración en Salud"
        },
        {
          id:14,
          name:"Dra. Ruth Recalde",
          image:"especialistas/r_recalde.gif",
          shortdescription:"Especialidad: Endodoncia",
        }];

        dateUrl = "http://prosmile.com.ec/Prosmile/assets/send_mail_date.php";
        contactUrl = "http://prosmile.com.ec/Prosmile/assets/send_mail.php";

  constructor(public http:HttpClient) { }



  sendAppoinmentUser(message){
    /*const headers = new HttpHeaders();
    headers.append('Content-Type','application/json; charset=UTF-8');
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Access-Control-Allow-Methods','GET, POST');*/

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin' : '*'
      })
    };

    return new Promise(
      resolve => {
        this.http.post(this.dateUrl, message, httpOptions)
          .subscribe(data => {
            resolve (data)
        })
      });
  }

  sendContact(message){
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin','*');

    return new Promise(
      resolve => {
        this.http.post(this.contactUrl, message, {headers:headers})
          .subscribe(data => {
            resolve (data)
        })
      });
  }
}

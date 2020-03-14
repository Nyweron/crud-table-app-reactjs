import React, { Component } from "react";
import { TableListRows } from "../components/table/TableListRows";
import TableAdd from "../components/table/TableAdd";
import Pagination from "../components/pagination/Pagination";
import {
  getAll,
  getKeyFromJson,
  filterTable,
  createPerson,
  deleteRow,
  updateRow
} from "../lib/personService";
import {
  removeRowById,
  updateByObjectId,
  sortIds,
  generateNewId
} from "../lib/personHelpers";

class TableContainer extends Component {
  state = {
    rowsFromDbJson: [],
    keysFromDbJson: [],
    sort: true,
    columnName: "",
    previousColumnName: "",
    add: false,
    currentRows: [],
    currentPage: 1,
    pageLimit: 5,
    pageNeighbours: 5,
    data:[
      {
        "id": 1,
        "firstName": "Crystal",
        "lastName": "Andrews",
        "age": 72,
        "isActive": true,
        "hobby": "id voluptate non qui aliquip laboris mollit"
      },
      {
        "id": 2,
        "firstName": "Jennings",
        "lastName": "Wade",
        "age": 56,
        "isActive": true,
        "hobby": "occaecat irure incididunt sit excepteur excepteur aliqua"
      },
      {
        "id": 3,
        "firstName": "Silva9",
        "lastName": "Pate",
        "age": 12,
        "isActive": true,
        "hobby": "labore dolore et esse proident duis excepteur"
      },
      {
        "id": 4,
        "firstName": "Bolton",
        "lastName": "Cotton",
        "age": 86,
        "isActive": false,
        "hobby": "pariatur nulla ea anim proident labore nostrud"
      },
      {
        "id": 5,
        "firstName": "Bender",
        "lastName": "Mccall",
        "age": 65,
        "isActive": false,
        "hobby": "anim tempor in non dolore laborum irure"
      },
      {
        "id": 6,
        "firstName": "Penny",
        "lastName": "Caldwell",
        "age": 50,
        "isActive": true,
        "hobby": "laborum nulla eiusmod id cillum commodo ut"
      },
      {
        "id": 7,
        "firstName": "Lindsay",
        "lastName": "Lucas",
        "age": 8,
        "isActive": false,
        "hobby": "ea sunt amet culpa pariatur dolor cillum"
      },
      {
        "id": 8,
        "firstName": "Jamie",
        "lastName": "Gibbs",
        "age": 11,
        "isActive": true,
        "hobby": "anim ea est culpa velit et quis"
      },
      {
        "id": 9,
        "firstName": "Debra",
        "lastName": "Underwood",
        "age": 42,
        "isActive": false,
        "hobby": "elit esse veniam mollit aliquip ad ex"
      },
      {
        "id": 10,
        "firstName": "Taylor",
        "lastName": "Salazar",
        "age": 13,
        "isActive": false,
        "hobby": "duis minim dolor esse labore nulla est"
      },
      {
        "id": 12,
        "firstName": "Vinson",
        "lastName": "Hogan",
        "age": 36,
        "isActive": false,
        "hobby": "ipsum dolor deserunt ullamco ad qui do"
      },
      {
        "id": 14,
        "firstName": "Angelia",
        "lastName": "Sawyer",
        "age": 27,
        "isActive": false,
        "hobby": "sit velit laborum consectetur consectetur ullamco nulla"
      },
      {
        "id": 15,
        "firstName": "Freida",
        "lastName": "Nieves",
        "age": 0,
        "isActive": true,
        "hobby": "sunt nulla nisi amet fugiat cillum laborum"
      },
      {
        "id": 18,
        "firstName": "Zelma",
        "lastName": "Joyner",
        "age": 96,
        "isActive": false,
        "hobby": "deserunt tempor eu excepteur exercitation Lorem dolore"
      },
      {
        "id": 19,
        "firstName": "Reyna",
        "lastName": "Hardin",
        "age": 93,
        "isActive": false,
        "hobby": "nulla anim sunt velit enim magna amet"
      },
      {
        "id": 20,
        "firstName": "Shari",
        "lastName": "Phelps",
        "age": 8,
        "isActive": false,
        "hobby": "et laborum adipisicing exercitation cillum excepteur esse"
      },
      {
        "id": 21,
        "firstName": "Frazier",
        "lastName": "Pennington",
        "age": 29,
        "isActive": false,
        "hobby": "non dolor culpa do et amet anim"
      },
      {
        "id": 22,
        "firstName": "Dawson",
        "lastName": "Boyle",
        "age": 1,
        "isActive": true,
        "hobby": "esse proident et exercitation elit eu non"
      },
      {
        "id": 23,
        "firstName": "Jessica",
        "lastName": "Mills",
        "age": 72,
        "isActive": true,
        "hobby": "in sunt est amet proident do nisi"
      },
      {
        "id": 24,
        "firstName": "Helen",
        "lastName": "Mack",
        "age": 42,
        "isActive": false,
        "hobby": "minim do nisi enim irure officia ex"
      },
      {
        "id": 25,
        "firstName": "Velazquez",
        "lastName": "Craft",
        "age": 95,
        "isActive": true,
        "hobby": "veniam culpa amet pariatur proident elit aliqua"
      },
      {
        "id": 26,
        "firstName": "Tucker",
        "lastName": "Hicks",
        "age": 83,
        "isActive": false,
        "hobby": "aliquip aliquip nisi aliqua culpa esse cupidatat"
      },
      {
        "id": 27,
        "firstName": "Erin",
        "lastName": "Holloway",
        "age": 17,
        "isActive": false,
        "hobby": "nulla velit irure mollit in culpa cillum"
      },
      {
        "id": 28,
        "firstName": "Burgess",
        "lastName": "Harrison",
        "age": 25,
        "isActive": false,
        "hobby": "consectetur velit dolore cillum enim cupidatat nostrud"
      },
      {
        "id": 29,
        "firstName": "Guerrero",
        "lastName": "Le",
        "age": 81,
        "isActive": false,
        "hobby": "minim id occaecat reprehenderit id proident esse"
      },
      {
        "id": 30,
        "firstName": "Melendez",
        "lastName": "Talley",
        "age": 98,
        "isActive": true,
        "hobby": "qui sunt duis quis ad irure esse"
      },
      {
        "id": 31,
        "firstName": "Cristina",
        "lastName": "Everett",
        "age": 33,
        "isActive": false,
        "hobby": "nisi nulla nisi excepteur commodo duis veniam"
      },
      {
        "id": 32,
        "firstName": "Medina",
        "lastName": "Douglas",
        "age": 89,
        "isActive": false,
        "hobby": "commodo pariatur anim sit exercitation sunt pariatur"
      },
      {
        "id": 33,
        "firstName": "Valencia",
        "lastName": "Harris",
        "age": 56,
        "isActive": false,
        "hobby": "incididunt laborum consectetur minim sint qui culpa"
      },
      {
        "id": 34,
        "firstName": "Fuller",
        "lastName": "Bender",
        "age": 22,
        "isActive": true,
        "hobby": "laboris proident pariatur aute labore amet dolor"
      },
      {
        "id": 35,
        "firstName": "Munoz",
        "lastName": "Fulton",
        "age": 26,
        "isActive": true,
        "hobby": "officia nulla nisi aliquip cupidatat aliquip amet"
      },
      {
        "id": 36,
        "firstName": "Ann",
        "lastName": "Walters",
        "age": 41,
        "isActive": true,
        "hobby": "nisi elit velit deserunt ut nisi incididunt"
      },
      {
        "id": 37,
        "firstName": "Lacy",
        "lastName": "Hoover",
        "age": 48,
        "isActive": false,
        "hobby": "velit eiusmod ea nostrud commodo esse quis"
      },
      {
        "id": 38,
        "firstName": "Eliza",
        "lastName": "Schmidt",
        "age": 28,
        "isActive": false,
        "hobby": "mollit eiusmod laborum et ipsum non proident"
      },
      {
        "id": 39,
        "firstName": "Whitney",
        "lastName": "Hill",
        "age": 40,
        "isActive": false,
        "hobby": "elit occaecat labore labore mollit Lorem amet"
      },
      {
        "id": 40,
        "firstName": "Sondra",
        "lastName": "Reeves",
        "age": 46,
        "isActive": true,
        "hobby": "excepteur aliqua ipsum non tempor labore aute"
      },
      {
        "id": 41,
        "firstName": "Carla",
        "lastName": "Rodgers",
        "age": 7,
        "isActive": false,
        "hobby": "incididunt eu cupidatat consectetur mollit anim ea"
      },
      {
        "id": 42,
        "firstName": "Wood",
        "lastName": "Cameron",
        "age": 24,
        "isActive": false,
        "hobby": "ea sit aliqua culpa nisi pariatur consectetur"
      },
      {
        "id": 43,
        "firstName": "Sellers",
        "lastName": "Bridges",
        "age": 37,
        "isActive": true,
        "hobby": "ex excepteur nisi consectetur nulla magna sint"
      },
      {
        "id": 44,
        "firstName": "Caldwell",
        "lastName": "Eaton",
        "age": 50,
        "isActive": true,
        "hobby": "elit ut duis Lorem nisi ut anim"
      },
      {
        "id": 45,
        "firstName": "Ware",
        "lastName": "Reilly",
        "age": 2,
        "isActive": false,
        "hobby": "anim do dolor cillum qui sint Lorem"
      },
      {
        "id": 46,
        "firstName": "Gonzales",
        "lastName": "Chaney",
        "age": 66,
        "isActive": false,
        "hobby": "ad ex occaecat excepteur voluptate duis veniam"
      },
      {
        "id": 47,
        "firstName": "Haney",
        "lastName": "Gill",
        "age": 71,
        "isActive": true,
        "hobby": "aute magna do laboris ea ullamco velit"
      },
      {
        "id": 48,
        "firstName": "Callie",
        "lastName": "Acevedo",
        "age": 75,
        "isActive": true,
        "hobby": "Lorem dolore veniam ut consectetur laborum tempor"
      },
      {
        "id": 49,
        "firstName": "Holder",
        "lastName": "Barker",
        "age": 12,
        "isActive": true,
        "hobby": "nostrud consectetur sunt veniam esse id culpa"
      },
      {
        "id": 50,
        "firstName": "Ina",
        "lastName": "Patrick",
        "age": 97,
        "isActive": false,
        "hobby": "laboris minim amet sint veniam veniam duis"
      },
      {
        "id": 51,
        "firstName": "Turner",
        "lastName": "Page",
        "age": 13,
        "isActive": false,
        "hobby": "irure Lorem ea cillum qui sint Lorem"
      },
      {
        "id": 52,
        "firstName": "Meadows",
        "lastName": "Maynard",
        "age": 72,
        "isActive": false,
        "hobby": "cillum elit ut dolor laboris qui minim"
      },
      {
        "id": 53,
        "firstName": "Blanca",
        "lastName": "Pittman",
        "age": 12,
        "isActive": true,
        "hobby": "officia commodo excepteur proident exercitation quis magna"
      },
      {
        "id": 54,
        "firstName": "Sandy",
        "lastName": "Gallegos",
        "age": 84,
        "isActive": false,
        "hobby": "dolore ipsum cupidatat cupidatat nisi incididunt minim"
      },
      {
        "id": 55,
        "firstName": "Margret",
        "lastName": "Cole",
        "age": 1,
        "isActive": true,
        "hobby": "magna eu laborum exercitation elit nulla magna"
      },
      {
        "id": 56,
        "firstName": "Imogene",
        "lastName": "Adams",
        "age": 25,
        "isActive": true,
        "hobby": "elit magna deserunt sunt ut do cillum"
      },
      {
        "id": 57,
        "firstName": "Sandra",
        "lastName": "Delaney",
        "age": 1,
        "isActive": true,
        "hobby": "velit incididunt magna aute sunt veniam anim"
      },
      {
        "id": 58,
        "firstName": "Magdalena",
        "lastName": "Carey",
        "age": 59,
        "isActive": false,
        "hobby": "sunt anim esse officia ut Lorem ea"
      },
      {
        "id": 59,
        "firstName": "Annmarie",
        "lastName": "Sherman",
        "age": 43,
        "isActive": false,
        "hobby": "mollit adipisicing nostrud eu voluptate labore reprehenderit"
      },
      {
        "id": 60,
        "firstName": "Desiree",
        "lastName": "Lancaster",
        "age": 84,
        "isActive": true,
        "hobby": "eiusmod dolore irure laborum culpa do mollit"
      },
      {
        "id": 61,
        "firstName": "Head",
        "lastName": "Trevino",
        "age": 92,
        "isActive": false,
        "hobby": "tempor esse amet Lorem ex enim aliquip"
      },
      {
        "id": 62,
        "firstName": "Janice",
        "lastName": "Mclean",
        "age": 16,
        "isActive": false,
        "hobby": "irure cupidatat ullamco sit Lorem dolor ea"
      },
      {
        "id": 63,
        "firstName": "Maryanne",
        "lastName": "Knowles",
        "age": 14,
        "isActive": false,
        "hobby": "reprehenderit nostrud sit ea laborum adipisicing in"
      },
      {
        "id": 64,
        "firstName": "Leigh",
        "lastName": "Vazquez",
        "age": 3,
        "isActive": true,
        "hobby": "ipsum reprehenderit reprehenderit incididunt voluptate id fugiat"
      },
      {
        "id": 65,
        "firstName": "Lara",
        "lastName": "Osborne",
        "age": 31,
        "isActive": false,
        "hobby": "pariatur consectetur eu exercitation cillum minim irure"
      },
      {
        "id": 66,
        "firstName": "Carlene",
        "lastName": "Short",
        "age": 60,
        "isActive": false,
        "hobby": "aute deserunt labore elit esse ut voluptate"
      },
      {
        "id": 67,
        "firstName": "Janine",
        "lastName": "Collier",
        "age": 31,
        "isActive": true,
        "hobby": "labore sint dolore elit ea quis cillum"
      },
      {
        "id": 68,
        "firstName": "Lilian",
        "lastName": "Stanley",
        "age": 30,
        "isActive": false,
        "hobby": "aute consectetur eiusmod et tempor ad aliquip"
      },
      {
        "id": 69,
        "firstName": "Elsie",
        "lastName": "Justice",
        "age": 40,
        "isActive": true,
        "hobby": "ipsum sunt tempor cillum qui ut cillum"
      },
      {
        "id": 70,
        "firstName": "Reilly",
        "lastName": "Savage",
        "age": 46,
        "isActive": false,
        "hobby": "culpa pariatur culpa quis non officia elit"
      },
      {
        "id": 71,
        "firstName": "Roxanne",
        "lastName": "Huffman",
        "age": 36,
        "isActive": false,
        "hobby": "aliquip adipisicing ea sint consectetur fugiat deserunt"
      },
      {
        "id": 72,
        "firstName": "Mandy",
        "lastName": "Morton",
        "age": 96,
        "isActive": true,
        "hobby": "id do ad et magna consectetur officia"
      },
      {
        "id": 73,
        "firstName": "Lola",
        "lastName": "Rhodes",
        "age": 28,
        "isActive": false,
        "hobby": "amet in cupidatat adipisicing ex id laboris"
      },
      {
        "id": 74,
        "firstName": "Alvarado",
        "lastName": "Weiss",
        "age": 76,
        "isActive": false,
        "hobby": "quis esse sunt cupidatat ullamco culpa id"
      },
      {
        "id": 75,
        "firstName": "White",
        "lastName": "Hobbs",
        "age": 95,
        "isActive": false,
        "hobby": "sunt elit do laboris commodo enim eu"
      },
      {
        "id": 76,
        "firstName": "Crane",
        "lastName": "Waller",
        "age": 9,
        "isActive": true,
        "hobby": "voluptate reprehenderit voluptate eiusmod do cupidatat et"
      },
      {
        "id": 77,
        "firstName": "Ballard",
        "lastName": "Humphrey",
        "age": 68,
        "isActive": true,
        "hobby": "ea velit minim velit commodo officia aliquip"
      },
      {
        "id": 78,
        "firstName": "Maxine",
        "lastName": "Britt",
        "age": 17,
        "isActive": true,
        "hobby": "irure pariatur laborum culpa eiusmod ea adipisicing"
      },
      {
        "id": 79,
        "firstName": "Bethany",
        "lastName": "Jarvis",
        "age": 10,
        "isActive": false,
        "hobby": "dolor minim excepteur nisi eiusmod aute minim"
      },
      {
        "id": 80,
        "firstName": "Gardner",
        "lastName": "Sheppard",
        "age": 95,
        "isActive": true,
        "hobby": "labore et quis dolor id tempor minim"
      },
      {
        "id": 81,
        "firstName": "Susanna",
        "lastName": "Langley",
        "age": 78,
        "isActive": false,
        "hobby": "et minim minim eiusmod laborum tempor et"
      },
      {
        "id": 82,
        "firstName": "Jaime",
        "lastName": "Ayala",
        "age": 100,
        "isActive": false,
        "hobby": "occaecat id do ut ipsum do aliquip"
      },
      {
        "id": 83,
        "firstName": "Marci",
        "lastName": "Vaughn",
        "age": 13,
        "isActive": true,
        "hobby": "aliqua proident ea aliquip magna ut minim"
      },
      {
        "id": 84,
        "firstName": "Howell",
        "lastName": "Hudson",
        "age": 8,
        "isActive": false,
        "hobby": "reprehenderit ea et nulla velit nulla ad"
      },
      {
        "id": 85,
        "firstName": "Rowe",
        "lastName": "Burks",
        "age": 94,
        "isActive": false,
        "hobby": "amet pariatur anim qui laborum culpa esse"
      },
      {
        "id": 86,
        "firstName": "Rosetta",
        "lastName": "Sweet",
        "age": 46,
        "isActive": true,
        "hobby": "ipsum minim minim non quis ullamco minim"
      },
      {
        "id": 87,
        "firstName": "Moon",
        "lastName": "Irwin",
        "age": 28,
        "isActive": true,
        "hobby": "in proident eiusmod quis culpa aliquip adipisicing"
      },
      {
        "id": 88,
        "firstName": "Jackson",
        "lastName": "Forbes",
        "age": 14,
        "isActive": false,
        "hobby": "et laboris exercitation nisi qui occaecat nisi"
      },
      {
        "id": 89,
        "firstName": "Staci",
        "lastName": "Boyer",
        "age": 65,
        "isActive": false,
        "hobby": "elit duis dolore amet in laboris irure"
      },
      {
        "id": 90,
        "firstName": "Sanford",
        "lastName": "Sykes",
        "age": 78,
        "isActive": false,
        "hobby": "sit pariatur laborum aute ad sunt est"
      },
      {
        "id": 91,
        "firstName": "Jodi",
        "lastName": "Bryant",
        "age": 83,
        "isActive": true,
        "hobby": "incididunt elit deserunt eiusmod qui dolore nisi"
      },
      {
        "id": 92,
        "firstName": "Sally",
        "lastName": "Alvarez",
        "age": 58,
        "isActive": false,
        "hobby": "non sunt enim duis minim ex do"
      },
      {
        "id": 93,
        "firstName": "Weber",
        "lastName": "Oneill",
        "age": 98,
        "isActive": false,
        "hobby": "sit anim quis ut commodo quis incididunt"
      },
      {
        "id": 94,
        "firstName": "Gillespie",
        "lastName": "Black",
        "age": 57,
        "isActive": true,
        "hobby": "officia dolor reprehenderit Lorem ut aute est"
      },
      {
        "id": 95,
        "firstName": "Queen",
        "lastName": "Ingram",
        "age": 9,
        "isActive": true,
        "hobby": "officia deserunt dolore laborum mollit Lorem voluptate"
      },
      {
        "id": 96,
        "firstName": "Orr",
        "lastName": "Ratliff",
        "age": 40,
        "isActive": true,
        "hobby": "excepteur culpa dolore aliquip nisi exercitation ullamco"
      },
      {
        "id": 97,
        "firstName": "Hurley",
        "lastName": "Farmer",
        "age": 35,
        "isActive": false,
        "hobby": "voluptate velit labore nisi deserunt ullamco officia"
      },
      {
        "id": 98,
        "firstName": "Cain",
        "lastName": "Mckay",
        "age": 23,
        "isActive": true,
        "hobby": "excepteur est veniam adipisicing commodo id ullamco"
      },
      {
        "id": 99,
        "firstName": "Virgie",
        "lastName": "Lara",
        "age": 35,
        "isActive": false,
        "hobby": "exercitation esse mollit ea est excepteur aute"
      },
      {
        "id": 100,
        "firstName": "Leonard",
        "lastName": "Holden",
        "age": 100,
        "isActive": true,
        "hobby": "velit reprehenderit aliqua ad culpa voluptate consectetur"
      },
      {
        "id": 101,
        "firstName": "Rosa",
        "lastName": "Paul",
        "age": 89,
        "isActive": true,
        "hobby": "qui consequat duis mollit nisi eu adipisicing"
      },
      {
        "id": 102,
        "firstName": "Araceli",
        "lastName": "Owen",
        "age": 42,
        "isActive": false,
        "hobby": "dolor duis sint pariatur tempor aliquip veniam"
      },
      {
        "id": 103,
        "firstName": "Hanson",
        "lastName": "Daniel",
        "age": 37,
        "isActive": true,
        "hobby": "eiusmod aliquip irure tempor commodo exercitation qui"
      },
      {
        "id": 104,
        "firstName": "Kayla",
        "lastName": "Finley",
        "age": 19,
        "isActive": false,
        "hobby": "labore anim amet amet ipsum ut labore"
      },
      {
        "id": 105,
        "firstName": "Corina",
        "lastName": "Hopkins",
        "age": 76,
        "isActive": true,
        "hobby": "in tempor dolor tempor dolore exercitation laboris"
      },
      {
        "id": 106,
        "firstName": "Cherry",
        "lastName": "Burgess",
        "age": 68,
        "isActive": true,
        "hobby": "sint incididunt magna tempor laborum nostrud nisi"
      },
      {
        "id": 107,
        "firstName": "Glover",
        "lastName": "Rollins",
        "age": 74,
        "isActive": true,
        "hobby": "laborum ex laborum adipisicing cillum cillum officia"
      },
      {
        "id": 108,
        "firstName": "Underwood",
        "lastName": "Howe",
        "age": 42,
        "isActive": true,
        "hobby": "cupidatat nulla velit mollit cillum quis irure"
      },
      {
        "id": 109,
        "firstName": "Hannah",
        "lastName": "Emerson",
        "age": 84,
        "isActive": true,
        "hobby": "in eu in mollit dolore ex do"
      },
      {
        "id": 110,
        "firstName": "7",
        "isActive": true
      }
    ]
  };

  componentDidMount() {
      this.setState({ rowsFromDbJson: this.state.data });
      const keys = getKeyFromJson(this.state.data);
      if (keys !== null) {
        this.setState({ keysFromDbJson: keys });
      }
  }

  handleSubmitAddRow = addObj => {
    if (
      addObj === undefined ||
      addObj === null ||
      addObj.firstName === null ||
      addObj.firstName === undefined ||
      addObj.firstName === ""
    ) {
      this.showTempMessage("Firstname is required");
      return;
    }

    const allRows = this.state.rowsFromDbJson;
    const sortedIds = sortIds(allRows);
    if (sortedIds.length === 0) {
      sortedIds.push("");
    }
    const newId = generateNewId(sortedIds);

    const newPerson = {
      id: newId,
      firstName: addObj.firstName,
      lastName: addObj.lastName,
      age: addObj.age,
      isActive: true,
      hobby: addObj.hobby
    };

    createPerson(newPerson).then(
      () => this.showTempMessage("person created"),
      this.setState(
        {
          rowsFromDbJson: [...this.state.rowsFromDbJson, newPerson]
        },
        () => {
          this.invokePaginationOnPageChanged();
        }
      )
    );

    for (var key in addObj) {
      delete addObj[key];
    }
  };

  handleChange = event => {
    event.preventDefault();
    if (this.state.keysFromDbJson.length === 0) {
      this.setState({
        keysFromDbJson: this.state.keysFromDbJson.push(event.target.name)
      });
    }
    for (let index = 0; index < this.state.keysFromDbJson.length; index++) {
      if (event.target.name === this.state.keysFromDbJson[index].toString()) {
        this.setState({ [event.target.name]: event.target.value });
      }
    }
  };

  handleRemove = id => {
    let listOfRows = this.state.rowsFromDbJson;
    const newListWithoutRemovedItem = removeRowById(listOfRows, id);

    deleteRow(id).then(
      () => this.showTempMessage("row deleted"),
      this.setState({ rowsFromDbJson: newListWithoutRemovedItem }, () => {
        this.invokePaginationOnPageChanged();
      })
    );
  };

  invokePaginationOnPageChanged = () => {
    const data = {};
    data.totalRecords = this.state.rowsFromDbJson.length;
    data.pageLimit = this.state.pageLimit;
    data.pageNeighbours = this.state.pageNeighbours;
    data.currentPage = this.state.currentPage;
    this.onPageChanged(data);
  };

  handleEdit = editObj => {
    let listOfRows = this.state.rowsFromDbJson;

    const editExistRow = {
      id: editObj.id,
      firstName: editObj.firstName,
      lastName: editObj.lastName,
      age: editObj.age,
      isActive: true,
      hobby: editObj.hobby
    };

    const newUpdatedRowList = updateByObjectId(listOfRows, editExistRow);

    updateRow(editExistRow).then(
      () => this.showTempMessage("row updated"),
      this.setState(
        {
          rowsFromDbJson: newUpdatedRowList
        },
        () => {
          this.invokePaginationOnPageChanged();
        }
      )
    );
  };

  showTempMessage = msg => {
    this.setState({ message: msg });
    setTimeout(() => {
      this.setState({ message: "" });
    }, 2000);
  };

  sortColumn = currentColumnName => {
    /* We use 2 because in list always will be empty row with id=0 and new row which we will create. */
    if (this.state.rowsFromDbJson.length === 2) {
      return;
    }
    if (this.state.previousColumnName === currentColumnName) {
      this.setState({ columnName: currentColumnName });
      this.setState(prevState => ({
        sort: !prevState.sort
      }));
    } else {
      this.setState({
        columnName: currentColumnName,
        previousColumnName: currentColumnName
      });
      this.setState(prevState => ({
        sort: !prevState.sort
      }));
    }
  };

  negationAdd = () => {
    this.setState({ add: !this.state.add });
  };

  onPageChanged = data => {
    console.log("data", data);
    const offset = (data.currentPage - 1) * data.pageLimit;
    const currentRows = this.state.rowsFromDbJson.slice(
      offset,
      offset + data.pageLimit
    );

    this.setState({
      currentPage: data.currentPage,
      rowsFromDbJson: this.state.rowsFromDbJson,
      currentRows
    });
  };

  render() {
    if (this.state.rowsFromDbJson.length === 0) {
      return null;
    }

    const displayTable = filterTable(
      this.state.keysFromDbJson,
      this.state.currentRows,
      this.state.columnName,
      this.state.sort
    );

    return (
      <div className="container">
        <div className="row">
          <button className="btn" onClick={this.negationAdd}>
            Add row
          </button>
          {this.state.message && (
            <span className="success">{this.state.message}</span>
          )}
        </div>

        <TableAdd
          show={this.state.add}
          handleSubmitAddRow={this.handleSubmitAddRow}
          handleChange={this.handleChange}
          negationAdd={this.negationAdd}
        />

        <div className="row">
          <TableListRows
            rows={displayTable}
            keys={
              this.state.keysFromDbJson === null
                ? null
                : this.state.keysFromDbJson
            }
            classCss="table table-striped table-bordered"
            handleChange={this.handleChange}
            sortColumn={this.sortColumn}
            handleRemove={this.handleRemove}
            handleEdit={this.handleEdit}
          />
        </div>
        <div className="container mb-5">
          <div className="d-flex flex-row py-4 align-items-center justify-content-center">
            <Pagination
              totalRecords={this.state.rowsFromDbJson.length}
              pageLimit={this.state.pageLimit}
              pageNeighbours={this.state.pageNeighbours}
              onPageChanged={this.onPageChanged}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TableContainer;

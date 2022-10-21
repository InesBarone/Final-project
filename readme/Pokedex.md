# Read.md de Pokedex

## Actores:

- Users

## Entidades

- Users

  ```json
  {
      id : "user_id"
      mail:"user@mail.com"
      password: "xxxxxx"
  }
  ```

- Pokemones :

```json
{
  "pokemon_id": 1,
  "poke_number": 1,
  "name": "Bulbasaur",
  "img": "/Images/bulbasaur.png",
  "weight": "6.9 kg",
  "height": "0.7 m",
  "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
  "hp": "060",
  "atk": "045",
  "def": "050",
  "satk": "090",
  "sdef": "080",
  "spd": "070",
  "type_1": 1,
  "type_2": 2,
  "moves": "Compound-Eyes, Tinted-Lens",
  "id": "#001"
}
```

## Users

- `Como usuario puedo registrarme`

#### `POST: /register`

Formato: **JSON**  
 Status:

**Request:**

```json
{
  "mail": "pepito@gmail.com",
  "password": "passworduser"
}
```

**Response:**

- Si mail no existe en base de datos y mail y password son distintos de vacio: **200 OK**

```json
{
  "mail": "pepito@gmail.com",
  "password": "passworduser"
}
```

- Si mail ya existe: **400 Bad Request**

```json
{ "msg": "There is a user with this email" }
```

- Mail es vacio: **400 Bad Request**

```json
{ "msg": "mail is required" }
```

- Password es vacio: **400 Bad Request**

```json
{ "msg": "password is required" }
```

- Password y mail es vacio: **400 Bad Request**

```json
{ "msg": "name and password is required" }
```

- `Como usuario puedo iniciar sesion`

### Sesion no iniciada

- Como usuario quiero poder iniciar sesion

#### `POST: /login`

Formato: **JSON**  
 Status:

- Si existe el usuario: **200OK**
- Si no existe el usuario: **400 Bad Request**

```json
{
  "mail": "pepito@gmail.com",
  "password": "passworduser"
}
```

### Sesion iniciada

- Como usuario quiero poder ver los pokemones

#### `GET: /pokemones` Listar todos los pokemones

Formato: **JSON**

Status: **200 OK**

```json
[
  {
    "pokemon_id": 1,
    "poke_number": 1,
    "name": "Bulbasaur",
    "img": "/Images/bulbasaur.png",
    "weight": "6.9 kg",
    "height": "0.7 m",
    "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    "hp": "060",
    "atk": "045",
    "def": "050",
    "satk": "090",
    "sdef": "080",
    "spd": "070",
    "type_1": 1,
    "type_2": 2,
    "moves": "Compound-Eyes, Tinted-Lens",
    "id": "#001",
    "id_type_1": 1,
    "type_name_1": "Grass",
    "type_colour_1": "#74CB48",
    "id_type_2": 2,
    "type_name_2": "Poison",
    "type_colour_2": "#A43E9E"
  }
]
```

- Como usuario quiero poder ver un pokemon

#### `GET: /pokemones/:name` Listar un solo pokemon

Formato: **JSON**

Status: **200 OK**

```json
{
  "pokemon_id": 1,
  "poke_number": 1,
  "name": "Bulbasaur",
  "img": "/Images/bulbasaur.png",
  "weight": "6.9 kg",
  "height": "0.7 m",
  "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
  "hp": "060",
  "atk": "045",
  "def": "050",
  "satk": "090",
  "sdef": "080",
  "spd": "070",
  "type_1": 1,
  "type_2": 2,
  "moves": "Compound-Eyes, Tinted-Lens",
  "id": "#001",
  "id_type_1": 1,
  "type_name_1": "Grass",
  "type_colour_1": "#74CB48",
  "id_type_2": 2,
  "type_name_2": "Poison",
  "type_colour_2": "#A43E9E"
}
```

- Como usuario quiero poder crear un pokemon

#### `POST: /pokemones/name` Crear un solo pokemon

**Request:**

```json
{
  "name": "Bulbasaur",
  "img": "/Images/bulbasaur.png",
  "weight": "6.9 kg",
  "height": "0.7 m",
  "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
  "hp": "060",
  "atk": "045",
  "def": "050",
  "satk": "090",
  "sdef": "080",
  "spd": "070",
  "type_1": 1,
  "type_2": 0,
  "moves": "Compound-Eyes, Tinted-Lens"
}
```

Status:

- Si el pokemon es creado **200 CREATED**
  **Response**

```json
{ "msg": "pokemon creado" }
```

- Si el pokemon tiene errores en la validacion de sus campos: **400 Bad Request**

```json
{ "msg": "all fields are required" }
```

- Como usuario quiero poder compartir un pokemon

#### `GET: /pokemones/:name` Compartir pokemon

Formato: **JSON**

**Request**

```json
{
  "pokemon_id": 1
}
```

Status: **200 OK**

**Response**

```json
{
  "link": "http://localhost:3003/pokemones/share/id"
}
```

- Como usuario quiero poder ver un pokemon
  compartido por otro usuario

#### `GET: /pokemones/see/:pokemon_id` Ver pokemon compartido

Formato: **JSON**

Status: **200 OK**

```json
{
  "pokemon_id": 1,
  "poke_number": 1,
  "name": "Bulbasaur",
  "img": "/Images/bulbasaur.png",
  "weight": "6.9 kg",
  "height": "0.7 m",
  "description": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
  "hp": "060",
  "atk": "045",
  "def": "050",
  "satk": "090",
  "sdef": "080",
  "spd": "070",
  "type_1": 1,
  "type_2": 2,
  "moves": "Compound-Eyes, Tinted-Lens",
  "id": "#001"
}
```

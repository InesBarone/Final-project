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
  "pokemon_id": "#001",
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
  "type_1": {
    "name": "Bug",
    "color": "#A7B723"
  },
  "type_2": {
    "name": "Flying",
    "color": "#A891EC"
  },
  "moves": "Compound-Eyes, Tinted-Lens"
}
```

## Users

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
    "pokemon_id": "#001",
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
    "type_1": {
      "name": "Bug",
      "color": "#A7B723"
    },
    "type_2": {
      "name": "Flying",
      "color": "#A891EC"
    },
    "moves": "Compound-Eyes, Tinted-Lens"
  }
]
```

- Como usuario quiero poder ver un pokemon

#### `GET: /pokemones/:name` Listar un solo pokemon

Formato: **JSON**

Status: **200 OK**

```json
{
  "pokemon_id": "#001",
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
  "type_1": {
    "name": "Bug",
    "color": "#A7B723"
  },
  "type_2": {
    "name": "Flying",
    "color": "#A891EC"
  },
  "moves": "Compound-Eyes, Tinted-Lens"
}
```

- Como usuario quiero poder crear un pokemon

#### `POST: /pokemones` Crear un solo pokemon

Formato: **JSON**

Status: **200 OK**

```json
{
  "pokemon_id": "#001",
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
  "type_1": {
    "name": "Bug",
    "color": "#A7B723"
  },
  "type_2": {
    "name": "Flying",
    "color": "#A891EC"
  },
  "moves": "Compound-Eyes, Tinted-Lens"
}
```

- Como usuario quiero poder compartir un pokemon

#### `POST: /pokemones/:pokemon_id` Compartir pokemon

Formato: **JSON**

Status: **200 OK**

```json
{
  "pokemon_id": "#001",
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
  "type_1": {
    "name": "Bug",
    "color": "#A7B723"
  },
  "type_2": {
    "name": "Flying",
    "color": "#A891EC"
  },
  "moves": "Compound-Eyes, Tinted-Lens"
}
```

- Como usuario quiero poder ver un pokemon
  compartido por otro usuario

#### `GET: /pokemones/:pokemon_id` Ver pokemon compartido

Formato: **JSON**

Status: **200 OK**

```json
{
  "pokemon_id": "#001",
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
  "type_1": {
    "name": "Bug",
    "color": "#A7B723"
  },
  "type_2": {
    "name": "Flying",
    "color": "#A891EC"
  },
  "moves": "Compound-Eyes, Tinted-Lens"
}
```

# Read.md de Pokedex

## Actores:

- Users

## Entidades

- Users Info

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

### sesion no iniciada

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

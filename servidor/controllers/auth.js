// select * from pokemones p join
//( select id_type as id_type_1, type_name as type_name_1, type_colour as type_colour_1 from types_and_colours tac ) as t on p.type_1 = t.id_type_1 join
//( select id_type as id_type_2, type_name as type_name_2, type_colour as type_colour_2 from types_and_colours tac ) as t2 on p.type_2 = t2.id_type_2 ;

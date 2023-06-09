
/* 
1- Il faut creer la bd et la nommer kiwidb
2- executer les scripts suivants. 
*/

 CREATE TABLE Category 
 (
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(100) NOT NULL,
    description    VARCHAR(200) NOT NULL
);
CREATE TABLE IF NOT EXISTS public.recipe
(
    id SERIAL PRIMARY KEY,
    proposed_title character varying(255) ,
    proposed_description text COLLATE pg_catalog."default" NOT NULL,
    created_at time without time zone DEFAULT now(),
    updated_at time without time zone DEFAULT now(),
    user_id integer NOT NULL DEFAULT 1,
    preparation_time integer NOT NULL DEFAULT 0,
    cooking_time integer NOT NULL DEFAULT 0,
    portions integer NOT NULL DEFAULT 1,
    adopted_title character varying(255) COLLATE pg_catalog."default",
    adopted_description text,
    status integer NOT NULL DEFAULT 0, 
    
    UNIQUE(adopted_title)
);


CREATE TABLE IF NOT EXISTS public.categoryrecipe
(
    id  SERIAL PRIMARY KEY,
    categoryId integer NOT NULL,
    recipeId integer NOT NULL,
    CONSTRAINT fk_categoryrecipe_category FOREIGN KEY(categoryId) REFERENCES category(id),
	CONSTRAINT fk_categoryrecipe_recipe FOREIGN KEY(recipeId) REFERENCES recipe(id)   
);



CREATE TABLE IF NOT EXISTS image
(
    id  SERIAL PRIMARY KEY ,
    file_name TEXT NOT NULL,
    adopted boolean DEFAULT FALSE ,
    recipe_id integer DEFAULT 1,
    user_id integer NOT NULL DEFAULT 1,
    CONSTRAINT fk_images_recipes FOREIGN KEY(recipe_id) REFERENCES recipe(id)
);			   

CREATE TABLE IF NOT EXISTS  favoris 
(
    id      SERIAL PRIMARY KEY,
    recipeId    INTEGER NOT NULL,
    userId INTEGER NOT NULL,
	constraint fk_favoris_recipe FOREIGN KEY(recipeId) REFERENCES recipe(id) 
);

CREATE TABLE IF NOT EXISTS likes 
(
   id      SERIAL PRIMARY KEY,
   recipeId    INTEGER NOT NULL,
   userId INTEGER NOT NULL,
	constraint fk_likes_recipe FOREIGN KEY(recipeId) REFERENCES recipe(id)
);

CREATE TABLE IF NOT EXISTS steps
(
   id      SERIAL PRIMARY KEY,
   recipeId    INTEGER NOT NULL,
   description    VARCHAR(200) NOT NULL,
   stepNumber INTEGER    NOT NULL,               
   adopted BOOLEAN NOT NULL DEFAULT false,
   constraint uniq_steps UNIQUE(recipeId, stepNumber),
   constraint fk_step_recipe FOREIGN KEY(recipeId) REFERENCES recipe(id)
);

CREATE TABLE IF NOT EXISTS public.ingredientrecipe
(
    id  SERIAL PRIMARY KEY,
    ingredientId integer NOT NULL,
    recipeId integer NOT NULL,
    qte integer NOT NULL,
    CONSTRAINT fk_ingredientrecipe_ingredient FOREIGN KEY(ingredientId) REFERENCES ingredient(id),
    CONSTRAINT fk_ingredientrecipe_recipe FOREIGN KEY(recipeId) REFERENCES recipe(id) ,
    CONSTRAINT uniq_ingredientrecipe UNIQUE(recipeId, ingredientId)
);

CREATE TABLE  IF NOT EXISTS public.ingredient 
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  unity VARCHAR(1) NOT NULL DEFAULT 'G'
);
INSERT INTO public.ingredient( name, unity)
    VALUES ('fruits et legumes', 'G'), ('laitus', 'L'), ('aromes', 'L');


INSERT INTO category(name,description) VALUES('africain','recette africaine');
INSERT INTO category(name,description) VALUES('europeen','recette europeenne');
INSERT INTO category(name,description) VALUES('asiatique','recette asiatique');
INSERT INTO category(name,description) VALUES('arome','tout type aromes');
INSERT INTO category(name,description) VALUES('legumes','tout type de legumes');


INSERT INTO ingredient (name,categoryId) VALUES('arome',4);
INSERT INTO ingredient (name,categoryId) VALUES('poirot',5);

INSERT INTO recipe(proposedtitle,proposeddescription,userId,adoptedtitle,adopteddescription) VALUES('sushi','recette japonaise',2,'sushi','recette japonaise');
INSERT INTO recipe(proposedtitle,proposeddescription,userId,adoptedtitle,adopteddescription) VALUES('jus de raisins','recette populaire',2,'jus de raisins','recette populaire');

INSERT INTO categoryrecipe(categoryId,recipeId ) VALUES(4,2);
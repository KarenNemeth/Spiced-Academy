DROP TABLE actors;
CREATE TABLE actors (
	id SERIAL primary key,
	Name VARCHAR(225) not null,
	Age INTEGER,
	Number_of_Oscars Integer
);

INSERT INTO actors (name, Age, Number_of_Oscars) VALUES ('Leonardo DiCaprio', '41', '1');
INSERT INTO actors (name, Age, Number_of_Oscars) VALUES ('Jennifer Lawrence', '25', '1');
INSERT INTO actors (name, Age, Number_of_Oscars) VALUES ('Samuel L. Jackson', '67', '0');
INSERT INTO actors (name, Age, Number_of_Oscars) VALUES ('Meryl Streep', '66', '3');
INSERT INTO actors (name, Age, Number_of_Oscars) VALUES ('John Cho', '43', '0');

SELECT * from actors WHERE Number_of_Oscars > 0;
SELECT * from actors WHERE Age > 30;

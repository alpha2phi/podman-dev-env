CREATE SEQUENCE greeting_id_sequence START WITH 1;

CREATE TABLE greeting
(
    greeting_id INTEGER      NOT NULL DEFAULT nextval('greeting_id_sequence'),
    phrase      VARCHAR(256) NOT NULL,
    name        VARCHAR(256) NOT NULL,
    PRIMARY KEY (greeting_id)
);

INSERT INTO greeting(phrase, name)
VALUES
('Hello', 'Harry'),
('Hey', 'Ron'),
('Greetings', 'Hermione');

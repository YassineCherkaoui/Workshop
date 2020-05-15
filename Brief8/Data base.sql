
CREATE DATABASE Tournoi;
USE Tournoi;

drop table if exists Equipe;


drop table if exists Joueur;

drop table if exists Pays;

drop table if exists Tournoi;

drop table if exists jouer;

drop table if exists participe;

/*==============================================================/
 Table : Equipe                                              
/==============================================================*/
create table Equipe
(
      equipeId int not null,
      nomE varchar(254) null,
      constraint PK_EQUIPE primary key nonclustered (equipeId),
      constraint AK_IDENTIFIANT_1_EQUIPE unique (equipeId)
);
/*affichage table*/
select * from Equipe;
/*insert*/
insert into Equipe
values(1, 'ayoube');
insert into Equipe
values(2, 'hassan');
insert into Equipe
values(3, 'mehdi');
insert into Equipe
values(4, 'fatima');
/*update*/
update Equipe set nomE='boufaa'
where equipeId=1;
/*delete*/
delete from Equipe
where equipeId=1;

/* Table : Joueur */

create table Joueur
(
      joueurId int not null,
      nomJ varchar(254) null,
      sexeJ varchar(254) null,
      ageJ int null,
      constraint PK_JOUEUR primary key nonclustered (joueurId)
);

/*affichage table*/
select *
from Joueur;
/*insert*/
insert into Joueur
values(1, 'Yassine', 'Homme', 28);
insert into Joueur
values(2, 'reda', 'Homme', 20);
insert into Joueur
values(3, 'flan', 'Homme', 25);
insert into Joueur
values(4, 'flan', 'Homme', 22);
/*update */
update Joueur set nomJ='Yassin'
where ageJ='28';
/*delete*/
delete from Joueur
where nomJ='Yassin';



/*==============================================================/
 Table : Pays  
/==============================================================*/
create table Pays
(
      payId int not null,
      monnaie varchar(254) null,
      constraint PK_PAYS primary key nonclustered (payId),
      constraint AK_IDENTIFIANT_1_PAYS unique (payId)
);
/*affichage table */
select *
from Pays;
/* insert */
insert into Pays
values(1, 'Dollar');
/* update */
update Pays set monnaie='Dollarr'
where payId=1;
/* delete */
delete from Pays
where payId=1;


/* Table : Tournoi  */

create table Tournoi
(
      idTournoi int not null,
      nomT varchar(254) null,
      dateDebut datetime null,
      dateDeFin datetime null,
      constraint PK_TOURNOI primary key nonclustered (idTournoi),
      constraint AK_IDENTIFIANT_1_TOURNOI unique (idTournoi)
);
/* affichage table */
select *
from Tournoi;
/* insert */
insert into Tournoi
values(1, 'Yassine', '10/08/2020', '10/08/2021');
insert into Tournoi
values(2, 'Yassine', '10/08/2020', '10/08/2021');
/* update */
update Tournoi set nomT='Yassin'
where dateDebut='10/08/2020';
/* delete */
delete from Tournoi
where nomT='Yassine';



/*==============================================================/
 Login and PassWord                                             
/==============================================================*/

/* login Admin with password */
CREATE USER 'yassine'@'localhost' IDENTIFIED BY 'yassine';
GRANT ALL PRIVILEGES ON *.* TO 'yassine'@'localhost';
FLUSH PRIVILEGES
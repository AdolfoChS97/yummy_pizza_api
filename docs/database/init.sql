DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

drop table if exists users;
create table users(
	id serial, 
	name varchar(40) not null,
	email varchar(30) not null,
	password varchar(50) not null,
	created_at timestamp not null,
	updated_at timestamp not null,
	primary key(id)
);

drop table if exists orders;
create table orders(
	id serial,
	product_id int not null, 
	user_id int not null,
	delivery_id int not null,
	order_quantity int not null,
	created_at timestamp not null,
	updated_at timestamp not null,
	primary key(id)
);

drop table if exists products;
create table products(
	id serial,
	product_name varchar(40) not null, 
	product_price float not null,
	product_ingredients text null,
	created_at timestamp not null,
	updated_at timestamp not null,
	primary key(id)
);

drop table if exists deliveries;
create table deliveries(
	id serial, 
	street varchar(35) not null,
	zone varchar(35) not null,
	parish varchar(35) not null,
	city varchar(35) not null,	
	created_at timestamp not null,
	updated_at timestamp not null,
	primary key(id)
);

alter table orders add constraint FK_user_id
foreign key (user_id) references users(id);

alter table orders add constraint FK_product_id
foreign key (product_id) references products(id);

alter table orders add constraint FK_delivery_id
foreign key (delivery_id) references deliveries(id);


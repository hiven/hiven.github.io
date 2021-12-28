CREATE TABLE `Grid` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  `description` VARCHAR(255),
  `status` INT(1),
  `point` POINT DEFAULT NULL,
  `polygon` POLYGON DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=INNODB; CHARACTER SET utf8

//INSERT INTO `Grid`(point, polygon) 
//VALUES(ST_PointFromText('POINT(49.227239 17.564932)'),ST_PolygonFromText('POLYGON((0 5, 2 5, 2 7, 0 7, 0 5))'));

INSERT INTO Grid (point)
VALUES(Point(1,2));

mysql -uroot -ppassword --execute="CREATE DATABASE eightdemo;"
mysql -uroot -ppassword --execute="CREATE USER 'goplus'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';"
mysql -uroot -ppassword --execute="GRANT ALL ON eightdemo.* TO 'goplus'@'localhost';"
mysql -uroot -ppassword --execute="ALTER USER 'goplus'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';"
mysql -uroot -ppassword --execute="flush privileges;"
mysql -uroot -ppassword --execute="SET GLOBAL sql_mode='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
cd C:\Users\User\Desktop
git clone https://tanyinghui@github.com/galvinw/eightdemo.git
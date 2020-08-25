# -------------------------- Client Prod -------------------------- #
docker build --rm -t cloudjam-client-prod .

docker run -it -p 3000:3000 cloudjam-client-prod
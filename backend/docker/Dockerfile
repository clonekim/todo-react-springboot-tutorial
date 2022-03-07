FROM amazoncorretto:11-alpine-jdk
RUN apk upgrade musl
RUN apk del linux-pam
RUN apk --no-cache add tzdata && \
    cp /usr/share/zoneinfo/Asia/Seoul /etc/localtime && \
    echo "Asia/Seoul" > /etc/timezone

ENV LANG ko_KR.UTF-8

COPY *.jar                        /uber/uber.jar
COPY application.yml              /uber/application.yml

EXPOSE 8080
CMD ["java", "-jar", "/uber/uber.jar", "--spring.config.location=file:/uber/application.yml"]

FROM python:3.9-slim-buster

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV MONGO_URI=<your-mongo-uri>

EXPOSE 10001

CMD ["python", "jokes.py"]


import "reflect-metadata";
import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { container } from "tsyringe";
import TodoService from "../services/todo.service";
import ResponseTemplate from "../models/ResponseTemplate";

const todoService = container.resolve(TodoService);

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  const id = event.pathParameters!.id as string;
  const data = JSON.parse(event.body!);

  return todoService.update!(id, data).then(
    (res) =>
      ({
        statusCode: 201,
        body: JSON.stringify(res),
      } as ResponseTemplate)
  );
};

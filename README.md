# TFC - Site Informativo de Futebol ⚽️

O TFC é um site informativo sobre partidas e classificações de futebol!

## Descrição do Projeto

No time de desenvolvimento do TFC, seu squad foi responsável por desenvolver uma API (utilizando o método TDD) e também integrar - através do docker-compose - as aplicações para que elas funcionem consumindo um banco de dados.

Nesse projeto, foi desenvolvido um back-end dockerizado utilizando modelagem de dados através do Sequelize. O desenvolvimento respeitou as regras de negócio providas no projeto, e a API foi capaz de ser consumida por um front-end já provido nesse projeto.

Para adicionar uma partida, era necessário ter um token, portanto a pessoa deveria estar logada para fazer as alterações. Houve um relacionamento entre as tabelas teams e matches para fazer as atualizações das partidas.

O back-end desenvolvido implementou regras de negócio para popular adequadamente a tabela disponível no front-end, que foi exibida para a pessoa usuária do sistema.

## Composição do Projeto

Esse projeto foi composto de 4 fluxos principais:

### Teams (Times)

**Introdução**
Os requisitos a seguir consideraram o consumo da rota /teams para retornar os nomes dos times associados à partida na renderização do front-end.

1. Foram desenvolvidas, em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de times.
2. (TDD) Foram desenvolvidos testes que cobriram no mínimo 5 por cento dos arquivos em /app/backend/src, com um mínimo de 7 linhas cobertas.
3. Foi desenvolvido o endpoint /teams no back-end de forma que ele pudesse retornar todos os times corretamente.
4. (TDD) Foram desenvolvidos testes que cobriram no mínimo 10 por cento dos arquivos em /app/backend/src, com um mínimo de 19 linhas cobertas.
5. Foi desenvolvido o endpoint /teams/:id no back-end de forma que ele pudesse retornar dados de um time específico.

### Users e Login (Pessoas Usuárias e Credenciais de Acesso)

**Introdução**
A rota utilizada foi (/login);

A rota recebeu os campos email e password, e esses campos foram validados no banco de dados:

6. Foram desenvolvidas, em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de pessoas usuárias.
7. (TDD) Foram desenvolvidos testes que cobriram no mínimo 15 por cento dos arquivos em /app/backend/src, com um mínimo de 25 linhas cobertas.
8. Foi desenvolvido o endpoint /login no back-end de maneira que permitisse o acesso com dados válidos no front-end.
9. (TDD) Foram desenvolvidos testes que cobriram no mínimo 20 por cento dos arquivos em /app/backend/src, com um mínimo de 35 linhas cobertas.
10. Foi desenvolvido o endpoint /login no back-end de maneira que não permitisse o acesso com um email não cadastrado ou senha incorreta no front-end.
11. (TDD) Foi desenvolvido um middleware de validação para o token, verificando se ele era válido, e foi desenvolvido o endpoint /login/role no back-end de maneira que ele retornasse os dados corretamente no front-end.

### Matches (Partidas)

**Introdução**
Para os requisitos de criação de partidas, foi necessário implementar o model e algumas rotas relacionadas à entidade Match.


12. Foram desenvolvidas, em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de partidas.
13. (TDD) Foram desenvolvidos testes que cobriram no mínimo 45 por cento dos arquivos em /app/backend/src, com um mínimo de 70 linhas cobertas.
14. Foi desenvolvido o endpoint /matches de forma que os dados aparecessem corretamente na tela de partidas no front-end.
15. Foi desenvolvido o endpoint /matches de forma que fosse possível filtrar somente as partidas em andamento, e também filtrar somente as partidas finalizadas, na tela de partidas do front-end.
16. Foi desenvolvido o endpoint /matches/:id/finish de modo que fosse possível finalizar uma partida no banco de dados.
17. Foi desenvolvido o endpoint /matches/:id de forma que fosse possível atualizar partidas em andamento.
18. (TDD) Foram desenvolvidos testes que cobriram no mínimo 60 por cento dos arquivos em /app/backend/src, com um mínimo de 80 linhas cobertas.
19. Foi desenvolvido o endpoint /matches de modo que fosse possível cadastrar uma nova partida em andamento no banco de dados.
20. Foi desenvolvido o endpoint /matches de forma que não fosse possível inserir uma partida com times iguais nem com um time que não existisse na tabela de times.

### Leaderboards (Placares)

**Introdução**
Para construir a classificação dos times, seguiram-se as regras de negócios especificadas.

21. (Bônus; TDD) Foram desenvolvidos testes que cobriram no mínimo 80 por cento dos arquivos em /app/backend/src, com um mínimo de 100 linhas cobertas.
22. Foi desenvolvido o endpoint /leaderboard/home de forma que retornasse as informações do desempenho dos times da casa.
23. Foi desenvolvido o endpoint /leaderboard/home de forma que fosse possível filtrar as classificações dos times da casa na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional.
24. Foi desenvolvido o endpoint /leaderboard/home de forma que fosse possível filtrar as classificações dos times da casa na tela de classificação do front-end, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior.
25. Foi desenvolvido o endpoint /leaderboard/away de forma que retornasse as informações do desempenho dos times

## Leaderboards (Placares)


26. Foi desenvolvido o endpoint /leaderboard/away de forma que fosse possível filtrar as classificações dos times visitantes na tela de classificação do front-end.
27. Foi desenvolvido o endpoint /leaderboard/away de forma que fosse possível filtrar as classificações dos times visitantes na tela de classificação do front-end, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior.
28. Foi desenvolvido o endpoint /leaderboard/:team de forma que fosse possível buscar o desempenho de um time em específico na tela de classificação.
29. (Bônus; TDD) Foi desenvolvido o endpoint /leaderboard/ desempenho de todos os times na tela de classificação.
30. Foi desenvolvido o endpoint /leaderboard/ de forma que fosse possível buscar o desempenho de todos os times na tela de classificação, incluindo as propriedades goalsBalance e efficiency, além das propriedades dos requisitos anteriores.


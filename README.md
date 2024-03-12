**Development**

For greater convenience, use the bash dev.sh command

**Manually Method**
you should start RabbitMQ so that the queues become available using the following command:

```bash
docker-compose up -d rabbitmq
```

It's essential to start RabbitMQ first because it's crucial for the service to function.

Afterward, run the Node.js service with the following command:

```bash
docker-compose up -d node
```

You will notice that this command exits the service after running it. So, if you wish to view the logs of the same, use the following command:

```bash
docker-compose logs -f <service_name>
```

Replace `<service_name>` with the actual name of the service you want to monitor the logs for.

#### Access Rabbitmq Admin

```bash
 http://localhost:15672
 username: guest
 password: guest
```

#### Access PG Admin

```bash
 http://localhost:8080/
 username: user@localhost.com
 password: password
```

**Documento de Requisitos: Sistema de Atendimentos de Manutenção de Carros**

**1. Introdução**
Este documento descreve os requisitos para o desenvolvimento de um sistema de atendimentos de manutenção de carros, que permite o agendamento de serviços, atribuição de prioridades e monitoramento do tempo de execução das tarefas. O sistema visa otimizar o processo de manutenção automotiva, melhorando a eficiência na gestão de serviços e no atendimento aos clientes.

**2. Objetivos**
- Desenvolver um sistema que permita o agendamento de serviços de manutenção para carros.
- Atribuir prioridades às tarefas de manutenção com base na urgência e complexidade.
- Monitorar o tempo de execução de cada tarefa para garantir uma gestão eficiente dos recursos.
- Facilitar a comunicação entre clientes, mecânicos e gerentes de serviço.

**3. Requisitos Funcionais**

**3.1 Cadastro de Clientes**
- O sistema deve permitir o cadastro de novos clientes, incluindo informações como nome, endereço, número de telefone e informações do veículo.
- Os clientes registrados devem poder visualizar seu histórico de serviços e agendar novos serviços de manutenção.

**3.2 Agendamento de Serviços**
- Os clientes devem poder agendar serviços de manutenção para seus veículos, especificando o tipo de serviço necessário e a data desejada.
- O sistema deve validar a disponibilidade de horários para o serviço solicitado e confirmar o agendamento para o cliente.

**3.3 Atribuição de Prioridades**
- Cada serviço agendado deve ser atribuído a uma fila de acordo com sua prioridade, que pode ser alta, média ou baixa.
- A prioridade de um serviço deve ser determinada com base na urgência do reparo e na complexidade da tarefa.

**3.4 Monitoramento do Tempo de Execução**
- O sistema deve rastrear o tempo de execução de cada serviço de manutenção em andamento.
- Os mecânicos devem atualizar o status do serviço conforme progridem no reparo, fornecendo informações sobre o tempo decorrido e o tempo restante estimado.

**3.5 Notificações em Tempo Real**
- Os clientes devem receber notificações em tempo real sobre o status de seus serviços agendados, incluindo informações sobre o início do serviço, alterações de status e conclusão do reparo.
- Os gerentes de serviço devem receber notificações sobre serviços com prioridade alta ou atrasados, permitindo uma intervenção rápida, se necessário.

**4. Requisitos Não Funcionais**

**4.1 Segurança**
- O sistema deve garantir a segurança dos dados do cliente, utilizando técnicas adequadas de criptografia e proteção contra ataques cibernéticos.

**4.2 Desempenho**
- O sistema deve ser capaz de lidar com múltiplos agendamentos de serviço simultaneamente, garantindo tempos de resposta rápidos e uma experiência de usuário fluida.

**4.3 Usabilidade**
- A interface do usuário deve ser intuitiva e de fácil navegação, permitindo que os clientes agendem serviços com facilidade e os mecânicos atualizem o status dos serviços de forma eficiente.

**4.4 Escalabilidade**
- O sistema deve ser projetado para escalar conforme a demanda cresce, suportando um aumento no número de clientes e agendamentos de serviço.

**5. Glossário**
- **Serviço de Manutenção:** Tarefa de reparo ou manutenção a ser realizada em um veículo.
- **Prioridade:** Nível de importância atribuído a uma tarefa de manutenção, influenciando a ordem de execução.
- **Tempo de Execução:** Tempo necessário para concluir uma tarefa de manutenção, incluindo o tempo decorrido e o tempo restante estimado.

Este documento de requisitos estabelece a base para o desenvolvimento do sistema de atendimentos de manutenção de carros, definindo as funcionalidades essenciais e os requisitos não funcionais a serem atendidos durante o processo de desenvolvimento.

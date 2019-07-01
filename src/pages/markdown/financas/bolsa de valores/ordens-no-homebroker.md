---
title: "Enviando ordens no Homebroker"
date: "2019-06-27"
category: "Finanças"
categorySlug: "financas"
subcategory: "Bolsa de Valores"
subcategorySlug: "bolsa-de-valores"
featuredImage: "financas"
pageType: "page"
order: 6
---

##Tipos de Ordens

As ordens mais básicas de um homebroker são:

- Ordem de Compra
- Ordem de Venda
- Ordem STOP
- Ordem START

##Ordens de Compra e Venda

As ordens de compra e venda são as mais simples. Você as utiliza para comprar mais ações ou vender as ações que possui.

Para enviar uma ordem de compra ou venda, basta selecionar o tipo de ordem na boleta de ordens e especificar:

- Código da ação
- Preço pelo qual quer comprar ou vender
- Quantidade que deseja comprar ou vender
- Data em que deseja enviar a ordem caso esteja agendando para outro dia ou enviando a ordem fora do horário de pregão da bolsa
- Validade da ordem:
**Para o dia**: sua ordem permanece no sistema apenas no dia que enviou a mesma (ao final do pregão ela será cancelada caso não tenha sido executada)
**Até cancelar**: sua ordem é mantida no sistema até você comandar o cancelamento

Depois que tiver inserido os dados basta preencher a sua senha e selecionar “Enviar”. É comum que você tenha de confirmar as informações mais uma vez. Depois de enviada a ordem, ela aparecerá na Cesta de Ordens.

![Homebroker - Boleta preenchida](../../img/homebroker-boleta-preenchida.jpg)

##Ordens START e STOP

Ordens START (para preços aumentando) e ordens STOP (para preços caindo) são ordens em que você especifica um preço de disparo e um preço de execução:

- **Preço de disparo**: preço em que você deseja que sua ordem de compra ou venda seja enviada para a bolsa
- **Preço de execução**: preço em que você deseja que sua ordem de compra ou venda seja executada

Ordens desse tipo são utilizadas quando você não deseja enviar a ordem imediatamente mas sim quando a ação atingir determinado preço (preço de disparo). São muito utilizadas por especuladores para limitar suas perdas, automatizando o envio das ordens de saída de uma operação.

Por exemplo: Você tem 100 ações ordinárias do Banco Itau (ITUB 3) e deseja vendê-las por no mínimo R$24,30 (preço de execução) caso o preço delas comece a cair muito. Você pode automatizar essa ordem especificando qual é o preço que a ação deve atingir para que o sistema envia sua ordem de venda por R$24,30. Este será o preço de disparo. Você deve estabelecer um preço de disparo um pouco acima de R$24,30, do contrário, pode ser que sua ordem de vender a R$24,30 chegue muito tarde , quando a ação já estiver sendo negociada por R$23,90.

Preencha a boleta com as informações que você deseja:

![Homebroker - Boleta STOP](../../img/homebroker-boleta-preenchida-stop.jpg)

O que irá acontecer? Acompanhe a imagem abaixo:

![Funcionamento da ordem STOP](../../img/homebroker-fluxo-ordem-stop.jpg)

Ordens START têm o mesmo funcionamento , mas com preços que estão subindo.

Caso você deseje comprar ações por um preço acima do que está sendo negociado no momento, você pode estabelecer um preço de disparo um pouco abaixo do preço de compra que deseja efetuar. Nesse caso, quando o preço da ação subir até o preço de disparo, sua ordem de compra será enviada. Estas ordens também são utilizadas por especuladores para, por exemplo, automatizar a compra de uma ação quando ela ultrapassar um valor que possa caracterizar o início de um movimento de alta nos preços.
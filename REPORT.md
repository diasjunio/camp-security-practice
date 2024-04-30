PRIMEIA API : Vulnerabilidade de SQL Injection
O endpoint /login atual é vulnerável a ataques de injeção SQL porque insere diretamente dados fornecidos pelo usuário (nome de usuário e senha) na consulta SQL.

Podemos ter acessos não autorizados, negação de serviço ou modificação de dados.

SEGUNDA API app.get('/users',) expondo dados sensíveis

Exposição de senhas em texto plano, risco de violação de privacidade ou potencial para uso indevido de senhas.
Este endpoint expõe a senha do usuário em texto simples. Isto é extremamente perigoso porque a senha do usuário pode ser vista por qualquer pessoa com acesso à resposta da solicitação, representando um sério risco à segurança da conta do usuário.

TERCEIRA API 

Exponha a senha em texto simples: Isso pode resultar na divulgação não autorizada de senhas de usuários, representando um sério risco à segurança da conta.
Possibilidade de acesso não autorizado: Se a senha de um usuário for interceptada por terceiros mal-intencionados, ela poderá ser usada para acessar ilegalmente a conta do usuário. Isto pode levar ao roubo de identidade, violações de privacidade e outros tipos de atividades prejudiciais.
Ausência do princípio das “necessidades mínimas”: O endpoint também violou o princípio da “necessidade mínima” ao expor desnecessariamente a senha do usuário. 

const initializeVSCode = (description, trigger, body) => {
  if (body !== undefined) {
    return `"${description}": {
            "prefix": "${trigger}",
            "body": [
                  ${body.split('\n').map((line) => `"${line}"\n`)}
            ],
            "description": "${description}"
          }`;
  }
}

const initializeSublime = (description, trigger, body) => {
  return `<snippet>
      <content><![CDATA[
            ${body}
    ]]></content>
      <tabTrigger>${trigger}</tabTrigger>
      <description>${description}</description>
      <!-- Optional: Set a scope to limit where the snippet will trigger -->
      <!-- <scope >source.python</scope > -->
    </snippet>`;
}

const initializeAtom = (description, trigger, body) => {
  return `'${description}':
    'prefix': '${trigger}'
    'body': """
            ${body}
    """`
}

export { initializeAtom, initializeSublime, initializeVSCode };
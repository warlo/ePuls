function generateStatuses(name) {
  return {
    'BEGIN': `${name}.BEGIN`,
    'SUCCESS': `${name}.SUCCESS`,
    'FAILURE': `${name}.FAILURE`
  };
}

export const Statistics = {
  FETCH: generateStatuses('Statistics.FETCH')
}

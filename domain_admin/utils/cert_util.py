# -*- coding: utf-8 -*-
import re
import subprocess
from datetime import datetime

import dateparser
import pytz


def get_re_match_result(pattern, string):
    match = re.search(pattern, string)
    if match:
        return match.group(1)


def parse_params(text):
    data = {}

    for item in text.split(';'):
        [key, value] = item.split('=')
        data[key.strip()] = value

    return data


def parse_time(date_str):
    parsed_time = dateparser.parse(date_str)
    # 解析出来的时间含有时区
    # 转为东8区时间
    return parsed_time.astimezone(pytz.timezone('Asia/Shanghai'))


def format_datetime(date_time):
    return datetime.strftime(date_time, "%Y-%m-%d %H:%M:%S")


def format_date(date_time):
    return datetime.strftime(date_time, "%Y-%m-%d")


def get_cert_info(domain):
    """获取证书信息"""
    cmd = f"curl -Ivs https://{domain} --connect-timeout 10"

    exitcode, output = subprocess.getstatusoutput(cmd)

    # 正则匹配
    problem = get_re_match_result('SSL certificate problem: (.*)', output)
    if problem:
        raise Exception(problem)

    subject = get_re_match_result('subject: (.*)', output)
    issuer = get_re_match_result('issuer: (.*)', output)
    start_date = get_re_match_result('start date: (.*)', output)
    expire_date = get_re_match_result('expire date: (.*)', output)

    # 解析匹配结果
    start_date = parse_time(start_date)
    # print(start_date)
    expire_date = parse_time(expire_date)

    return {
        'domain': domain,
        'subject': parse_params(subject),
        'issuer': parse_params(issuer),
        'start_date': format_datetime(start_date),
        'expire_date': format_datetime(expire_date)
    }


if __name__ == '__main__':
    print(get_cert_info('www.baidu.com'))